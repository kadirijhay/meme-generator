import React from "react"
import Header from "./component/Header"
import MemeGenerator from "./component/MemeGenerator"
import Footer from "./component/Footer"
import "./App.css"

function App() {
    return(
        <div>
            <Header />
            <MemeGenerator />
            <Footer />
        </div>
    )
}

export default App