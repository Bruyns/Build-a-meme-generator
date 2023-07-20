import React from "react"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"

export default function App() {
 const [user, setUser] = React.useState("Joe")


    return (
        <main>
        <Header 
          user = {user}
        />
        <Body 
          user = {user}
        />
        </main>
    )
}
