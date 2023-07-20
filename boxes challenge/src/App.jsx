import React from "react"
import boxes from "./boxes.jsx"
import Box from "./Box.jsx"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        console.log(id)
  }

    const squareElements = squares.map(square => (
        <Box 
          key={square.id}
          keyId={square.id} 
          on={square.on} 
          handleClick={toggle}
        />
))

    return (
        <main>
            {squareElements}
        </main>
    )
}
