import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            <h3 className="instruction">To save the generated meme, right click the meme and choose "Save image as..."</h3>
        </div>
    )
}
