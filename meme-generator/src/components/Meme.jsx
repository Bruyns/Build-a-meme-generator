import React from "react";
import memesData from "../memesData";

export default function Meme () {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
        
        // const [memeImage, setMemeImage] = React.useState("")
            const [allMemeImages, setAllMemeImages] = React.useState(memesData)

            function getMemeImage() {
                const memesArray = memesData.data.memes
                const randomNumber = Math.floor(Math.random() * memesArray.length)
                const url = memesArray[randomNumber].url
                setMeme(prevMeme => ({
                    ...prevMeme,
                    randomImage: url
                }))
                // console.log(url)      
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
                    onClick={getMemeImage}
                >
                Get a new meme image 🖼
                </button>
                <img className="meme--image" src={meme.randomImage} />
            </div>
        </main>
    )
}

/* temp text
className="form--right" 
className="form--left"
*/ 