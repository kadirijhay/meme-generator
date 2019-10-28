import React from "react"

class Form extends React.Component {
    handleUpload = (event) => {
        if(this.refs.button.innerText === "Upload Image") {
            this.refs.uploadInput.click()
        }
    }
    
    render() {
        return(
            <form className="meme-form" onSubmit={this.props.eventHandler.handleRandom}>
                <div className="upload-fields">
                    <label>
                        <input 
                            type="radio"
                            name="modeSelector"
                            value="random"
                            checked={this.props.modeSelector === "random"}
                            onChange={this.props.eventHandler.handleChange}
                        />Random Image
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="modeSelector"
                            value="user"
                            checked={this.props.modeSelector === "user"}
                            onChange={this.props.eventHandler.handleChange}
                        />Upload Image
                    </label>
                    <input
                        style={{display:"none"}}
                        ref="uploadInput"
                        type="file"
                        accept="image/*"
                        onChange={this.props.eventHandler.handleImage}
                    />
                    <button onClick={this.handleUpload} ref="button" style={{display: !this.props.modeSelector && "none"}}>
                        {this.props.modeSelector === "random" ? "Random Image" : "Upload Image"}
                    </button>
                </div>
                <hr />
            </form>
        )
    }
}

export default Form