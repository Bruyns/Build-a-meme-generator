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
<<<<<<< HEAD
        <main>
            <div className="form">
=======
        <div>
            <form className="form">
>>>>>>> 35da0496a1217d1a64eccedadb056f8e3ad4dabb
>>>>>>> 69fbb87ef3479c2a22a65d0a1db57fb4437e2fb4
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
<<<<<<< HEAD
                <img className="meme--image" src={meme.randomImage} />
            </div>
        </main>
=======
                <img className="meme--image" src={memeImage} />
            </form>
        </div>
>>>>>>> 35da0496a1217d1a64eccedadb056f8e3ad4dabb
>>>>>>> 69fbb87ef3479c2a22a65d0a1db57fb4437e2fb4
    )
}

/* temp text
className="form--right" 
className="form--left"
*/ 