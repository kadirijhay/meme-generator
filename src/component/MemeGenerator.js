import React from "react"
import Form from "./Form"
import Canvas from "./Canvas"

class MemeGenerator extends React.Component {
    state = {
        loading: false,
        topText: "",
        bottomText: "",
        allMemeImgs: [],
        modeSelector: "",
        randomImg: "",
        uploadedImg: null
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    loading: false,
                    allMemeImgs: memes
                })
            })
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
        this.setState({
            [name]: checked
        }) :
        this.setState({
            [name]: value
        })
    }

    handleRandom = (event) => {
        event.preventDefault()
        
        if(!this.props.loading) {
            const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
            const randMemeImg = this.state.allMemeImgs[randNum].url
            
            this.setState({
                randomImg: randMemeImg
            })
        }
    }

    handleImage = (event) => {
        event.preventDefault()
        
        this.setState({
            uploadedImg: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        return(
            <div>
                <Form 
                    eventHandler = {this}
                    {...this.state}
                />
                <Canvas
                    eventHandler = {this}
                    {...this.state}
                />
            </div>
        )
    }
}

export default MemeGenerator