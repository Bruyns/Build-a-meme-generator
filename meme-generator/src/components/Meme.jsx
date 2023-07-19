import React from "react";
<<<<<<< HEAD
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
=======
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
>>>>>>> 35da0496a1217d1a64eccedadb056f8e3ad4dabb
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
<<<<<<< HEAD
                    onClick={loadNewMeme}
                >
                Get a new meme image 🖼
                </button>
                
            </div>
        </main>
=======
                    onClick={getMemeImage}
                >
                Get a new meme image 🖼
                </button>
                <img className="meme--image" src={memeImage} />
            </form>
        </div>
>>>>>>> 35da0496a1217d1a64eccedadb056f8e3ad4dabb
    )
}

/* temp text
className="form--right" 
className="form--left"
*/ 