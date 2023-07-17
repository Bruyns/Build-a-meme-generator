import React from "react";
import Header from "./components/Header"
import Meme from "./components/Meme"
import memesData from "./memesData";

export default function App () {
    const memesImages = memesData.data.memes.map((meme) => {
        return (
            <Meme 
            key={meme.id}
            {...meme}
            />
        )
    })

    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}