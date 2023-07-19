import React from "react"

/*
export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     *
    
    function handleClick() {
        setIsImportant("No") 
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
*/

import React from "react"

export default function App() {

    const [count, setCount] = React.useState(0)

    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */
    function onClickAdd(count) {
        return setCount(prevCount => prevCount + 1);
    }

    function onClickSubtract(count) {
        return setCount(prevCount => prevCount - 1);
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={onClickSubtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={onClickAdd}>+</button>
        </div>
    )
}
