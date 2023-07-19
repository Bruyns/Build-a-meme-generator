import React from "react";
import Header from "./components/Header"
import Meme from "./components/Meme"
import memesData from "./memesData";

export default function App () {
<<<<<<< HEAD
    const memesImages = memesData.data.memes.map((meme) => {
        return (
            <Meme 
            key={meme.id}
            {...meme}
            />
        )
    })

=======

    
>>>>>>> 35da0496a1217d1a64eccedadb056f8e3ad4dabb
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}