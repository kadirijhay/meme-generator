import React from "react"
import yaoming from "../images/yaoming.png"

function Header() {
    return(
        <header>
            <img src={yaoming} alt="Yaoming"/>
            <p>Meme Generator</p>
        </header>
    )
}

export default Header