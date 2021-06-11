import { Link, navigate } from "@reach/router"
import axios from "axios"
import { useEffect, useState } from "react";
import Form from "../components/Form"

const Edit = ({ id }) => {
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
        errm: '',
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`).then((res) => {
          console.log("got results", res);
          setFormInputs(res.data);
        });
      }, [id]);
    const submitFunction = (e) => {
        e.preventDefault()
        axios
            .put("http://localhost:8000/api/pet/" + id, formInputs)
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
                    errm: " name is require"
                })
            } else if (e.target.value.length < 3) {
                setFormInputsError({
                    ...formInputsError,
                    errm: " name must be at least 3 characters"
                })
            }

            else {
                setFormInputsError({
                    ...formInputsError,
                    errm: "",
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
            <h3>Edit Gar Field</h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Form
                formInputs={formInputs}
        changeFunction={changeFunction}
        submitFunction={submitFunction}
        formInputsError={formInputsError}
        buttonText={"Edit"}
            />
        </div>
    )
}
export default Edit