import React from "react"
import boxes from "./boxes.jsx"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)

    /* using round braces instead of curly braces in a aroow function creats an implicit return
       does not have to set a return as it automatically returns everything within the round braces 
       whenever the function runs
    */
// in style the first set of curly bois are to enter into javascipt within react and the 2nd set of curly boys
// sets the acual JS style method
    const styles = {
      backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    }

    const squareElements = squares.map(square => (
      <div style={styles} className="box" key={square.id}>
        
      </div>
    ))


    return (
        <main>
            {squareElements}
        </main>
    )
}
