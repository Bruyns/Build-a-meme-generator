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
       {
        firstName: "",
        lastName: "", 
        emailAdress: "", 
        associateForm: "", 
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
        }
       )
       console.log(formData)
       
        function handleChange(event) {
            const {name, value, type, checked} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            })
        }

        function handleSubmit(event) {
            event.preventDefault()
            console.log(formData)
        }

        return (
            <form onSubmit={handleSubmit} className="Form">
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
                    name={"comments"} 
                />
                <input
                    name="isFriendly"
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />

                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        name="employment"
                        type="radio"
                        id="unemployed"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input
                        name="employment"
                        type="radio"
                        id="part-time"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    <input
                        name="employment"
                        type="radio"
                        id="full-time"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                    <br />

                <label htmlFor="favColor">What is your favourite color?</label>
                <br />
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <button>submit</button>
            </form>
        )
}
