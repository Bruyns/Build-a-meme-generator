// import React from "react";

export default function Meme () {
    return (
        <main>
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
                >
                Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}

/* temp text
className="form--right" 
className="form--left"
*/ 