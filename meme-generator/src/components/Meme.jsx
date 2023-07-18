import React from "react";
import memesData from "../memesData";

export default function Meme () {

const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        // console.log(url)
        
    }

    return (
        <div>
            <form className="form">
                <input 
                    className="form--left"
                    type="text"
                    placeholder="Top text" 
                />
                <input 
                    className="form--right" 
                    type="text" 
                    placeholder="Bottom Text"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                Get a new meme image 🖼
                </button>
                <img className="meme--image" src={memeImage} />
            </form>
        </div>
    )
}

/* temp text
className="form--right" 
className="form--left"
*/ 