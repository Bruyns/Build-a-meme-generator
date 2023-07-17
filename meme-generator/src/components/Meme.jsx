import React from "react";
import ReactDOM from "react-dom/client"
import memesData from "../memesData"

export default function Meme () {
    function loadNewMeme(props) {
        const memeArray = memesData.data.memes;
        const randomMeme = Math.floor(Math.random() * memeArray.length)
        const imageLink = memeArray[randomMeme].url;
        console.log(url)    
  }

    return (
        <main>
            <div className="form">
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
                    onClick={loadNewMeme}
                >
                Get a new meme image 🖼
                </button>
                
            </div>
        </main>
    )
}

/* temp text
className="form--right" 
className="form--left"
*/ 