import { Link, navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from '../components/Button'


const One = ({ id ,props }) => {
  const [formInputs, setFormInputs] = useState({});


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id)
      .then((res) => {
        setFormInputs(res.data);
      })
  }, []);
  const DeleteFuncation = (e) => {
  
      axios
        .delete("http://localhost:8000/api/pet/" + id)
        .then((res) => {
          // props.setLoaded(true);
          navigate("/");
        })
        .catch((err) => console.log(err)); 
   
  };
  return (
    <div>
      <Link to="/">Back to Home </Link>
        <h5>Datails About :</h5> {formInputs.name}
          <hr></hr>
          <h5>Pet type:</h5> <p> {formInputs.type}</p>
          <h5>Description:</h5><p>{formInputs.description}</p>
          <h5>Skills: </h5><p>{formInputs.skill1}</p>
          <p>{formInputs.skill2}</p>
          <p>{formInputs.skill3}</p>
        <button onClick={DeleteFuncation}>Adopt Gar Field</button>

    </div>
  );
};
export default One;
