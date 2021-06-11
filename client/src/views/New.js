import { Link, navigate } from "@reach/router"
import axios from "axios"
import { useState } from "react"
import Form from "../components/Form"

const New = (props) => {
    const [errors, setErrors] = useState([])
    const [formInputs, setFormInputs] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",

    })
    const [formInputsError, setFormInputsError] = useState({
        title: '',
    })


    const submitFunction = (e) => {
        e.preventDefault()
        axios
            .post("http://localhost:8000/api/pet/", formInputs)
            .then((res) => {
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors // Get the errors from err.response.data
                const errorArr = [] // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                    // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr)
            })
    }

    const changeFunction = (e) => {

        if (e.target.name === 'name') {
            if (e.target.value.length < 1) {
                setFormInputsError({
                    ...formInputsError,
                    title: " name is required in frontend Valdition"
                })
            } else if (e.target.value.length < 3) {
                setFormInputsError({
                    ...formInputsError,
                    title: "  name must be at least 3 characters frontend Valdition"
                })
            }

            else {
                setFormInputsError({
                    ...formInputsError,
                    title: "",
                })
            }
        }
    setFormInputs({

            ...formInputs,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <Link to="/">Back to Home</Link>
            <h3>Add Pet</h3>
            <h5>Know a pets needing a home?</h5>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Form
                formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        formInputsError={formInputsError}
        buttonText={"Create"}
            />
        </div>
    )
}
export default New