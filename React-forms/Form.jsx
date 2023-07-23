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
       {firstName: "", lastName: "", emailAdress: "", associateForm: "", comments: ""}
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
            <form className="Form">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Lastname Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                                <input
                    type="email"
                    placeholder="Email adress"
                    onChange={handleChange}
                    name="emailAdress"
                    value={formData.emailAdress}
                />
                                <input
                    type="text"
                    placeholder="Associate form"
                    onChange={handleChange}
                    name="associateForm"
                    value={formData.associateForm}
                />
                <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name={"comments"} />
            </form>
        )
}
