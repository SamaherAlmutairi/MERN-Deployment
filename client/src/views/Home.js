import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";
import Button from "../components/Button";
import style from "../components/style.css"

const Home = ({ props }) => {
  const [ev, setev] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet")
      .then((res) => {
        setev(res.data.sort((a, b) => a.type.localeCompare(b.type)));
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <hr></hr>
      <Link to="/new">Add A Pet to the shelter</Link> 
            <h5>These pets are looking for a good home</h5>

            <table >
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ev.map((ev, index) => {
                        return <tr key={index}>
                            <td>{ev.name}</td>
                            <td>{ev.type}</td>
                            <td>
                            <Link to={`/one/${ev._id}`}>
          <button>Datitals </button>
        </Link> | <Link to={"/edit/" + ev._id}>
          <button >Edit</button>
        </Link>   
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
      {/* <hr></hr>
      {loaded &&<List data={ev} loaded={loaded} setLoaded={setLoaded} /> }
      <hr></hr> */}
    </>
  );
};
export default Home;
