import React from "react"

class Canvas extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const context = canvas.getContext("2d")
        const image = this.refs.canvasImg
        
        image.onload = () => {
            context.drawImage(image, 0, 0, canvas.width, canvas.height)
        }
    }

    handleDownload = (event) => {
        const altDownload = this.refs.altDownload
        altDownload.style.display = "block"

        const image = this.refs.canvasImg

        if(image.src === this.props.uploadedImg) {
            const userCanvas = this.refs.userCanvas
            const userContext = userCanvas.getContext("2d")
            
            userContext.font = "4em Anton"
            userContext.textAlign = "center"
            userContext.strokeStyle = "black"
            userContext.lineWidth = 2.5
            userContext.fillStyle = "white"
    
            userContext.clearRect(0, 0, userCanvas.width, userCanvas.height)
            userContext.drawImage(image, 0, 0, userCanvas.width, userCanvas.height)
    
            userContext.fillText(this.props.topText.toUpperCase(), userCanvas.width / 2, 85, userCanvas.width - 5)
            userContext.strokeText(this.props.topText.toUpperCase(), userCanvas.width / 2, 85, userCanvas.width - 5)
    
            userContext.fillText(this.props.bottomText.toUpperCase(), userCanvas.width / 2, userCanvas.height - 35, userCanvas.width - 5)
            userContext.strokeText(this.props.bottomText.toUpperCase(), userCanvas.width / 2, userCanvas.height - 35, userCanvas.width - 5)

            const dataURL = userCanvas.toDataURL()
    
            const tempLink = document.createElement("a")
            tempLink.download = "Generated Meme.png"
            tempLink.href = dataURL
    
            document.body.appendChild(tempLink)
            tempLink.click()
            document.body.removeChild(tempLink)
        }

    }

    handleGen = (event) => {
        const canvas = this.refs.canvas
        const image = this.refs.canvasImg

        const context = canvas.getContext("2d")
        
        context.font = "4em Anton"
        context.textAlign = "center"
        context.strokeStyle = "black"
        context.lineWidth = 2.5
        context.fillStyle = "white"

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.drawImage(image, 0, 0, canvas.width, canvas.height)

        context.fillText(this.props.topText.toUpperCase(), canvas.width / 2, 85, canvas.width - 5)
        context.strokeText(this.props.topText.toUpperCase(), canvas.width / 2, 85, canvas.width - 5)

        context.fillText(this.props.bottomText.toUpperCase(), canvas.width / 2, canvas.height - 35, canvas.width - 5)
        context.strokeText(this.props.bottomText.toUpperCase(), canvas.width / 2, canvas.height - 35, canvas.width - 5)

        if(this.props.randomImg || this.props.uploadedImg) {
            const download = this.refs.downloadBtn
            download.style.display = "block"
        }
    }

    render() {
        return(
            <div ref="generatedMeme" className="meme">
                <div className="text-fields">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Enter Top Text"
                        value={this.props.topText}
                        onChange={this.props.eventHandler.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Enter Bottom Text"
                        value={this.props.bottomText}
                        onChange={this.props.eventHandler.handleChange}
                    />
                    <button onClick={this.handleGen}>Generate</button>
                </div>
                <canvas ref="canvas" width={600} height={450}></canvas>
                <canvas style={{display:"none"}} ref="userCanvas" width={600} height={450}></canvas>
                <img
                    style={{display:"none"}}
                    ref="canvasImg"
                    src={
                        this.props.modeSelector === "user" ?
                        this.props.uploadedImg :
                        this.props.randomImg
                    }
                    alt=""
                />
                <button
                    style={{display:"none"}}
                    className="download"
                    ref="downloadBtn"
                    onClick={this.handleDownload}
                >Download</button>
                <span style={{display:"none", marginTop:"10px"}} ref="altDownload">
                    Not downloading? Right click on the image and select <b>Save Image as...</b><br/>
                    <em style={{color:"red"}}>
                        PS. Randomly Generated Memes may not be downloadable on Mobile. Use <b>Upload Image</b> instead
                    </em>
                </span>
            </div>
        )
    }
}

export default Canvas