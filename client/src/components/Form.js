const Form = ({
    formInputs,
    changeFunction,
    submitFunction,
    buttonText,
    formInputsError,
  }) => {
    return (
        <form onSubmit={submitFunction}>
            <div >
                <p>
                    Name: {" "}
                <input
                        type="text"
                        name="name"
                        value={formInputs.name}
                        onChange={changeFunction}
                    />
                </p>
                {formInputsError.title ? <p style={{ color: "red" }}>{formInputsError.title}</p> : ""}
                <p>
                Type: {" "}
                <input
                        type="text"
                        name="type"
                        value={formInputs.type}
                        onChange={changeFunction}
                    />
                </p>
                <p>
                Description: {" "}
                <input
                        type="text"
                        name="description"
                        value={formInputs.description}
                        onChange={changeFunction}
                    />
                </p>
                <p>Skills (Optional)</p>
                <p>
                Skill 1: {" "}
                <input
                        type="text"
                        name="skill1"
                        value={formInputs.skill1}
                        onChange={changeFunction}
                    />
                </p>
                <p>
                Skill 2: {" "}
                <input
                        type="text"
                        name="skill2"
                        value={formInputs.skill2}
                        onChange={changeFunction}
                    />
                </p>
                <p>
                Skill 3: {" "}
                <input
                        type="text"
                        name="skill3"
                        value={formInputs.skill3}
                        onChange={changeFunction}
                    />
                </p>
    
                <button type="submit" >{buttonText}</button>
                {/* <Link to="/"><button >cancel</button></Link> */}
            </div>
        </form>
    )
}

export default Form