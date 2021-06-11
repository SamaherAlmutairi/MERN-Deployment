import { Link, navigate } from "@reach/router";
import axios from "axios";
const Button = (props) => {

  console.log(props);
  const DeleteFuncation = (e) => {
      axios
        .delete("http://localhost:8000/api/pet/" + props.ev._id)
        .then((res) => {
          props.setLoaded(true);
          navigate("/");
        })
        .catch((err) => console.log(err)); 
  };
  return (
<>
        <button onClick={DeleteFuncation}>Delete</button>
  
      {/* <p>
        <Link to={`/one/${props.ev._id}`}>
          <button>View </button>
        </Link>
        <button onClick={DeleteFuncation}>Delete</button>
        <Link to={"/edit/" + props.ev._id}>
          <button>Edit</button>{" "}
        </Link>
      </p>
    </> */ }
    </>
  );
};

export default Button;
