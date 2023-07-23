import React from "react"

export default function Form() {
/*    const [firstName, setFirstName] = React.useState("")
    console.log(firstName)
    function handleChange(event) {
        
        setFirstName(event.target.value)
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
    */
   
   const [formData, setFormData] = React.useState(
       {firstName: "", lastName: ""}
       )
       console.log(formData)
       
        function handleChange(event) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [event.target.name]: event.target.value
                }
            })
        }

        return (
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                />
                <input
                    type="text"
                    placeholder="Lastname Name"
                    onChange={handleChange}
                    name="lastName"
                />
            </form>
        )
}
