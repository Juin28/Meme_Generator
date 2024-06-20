import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">&copy; Created by Juin Tan</h4>
        </header>
    )
}