import './App.css';
import { Router } from '@reach/router';
import Home from "./views/Home";
import One from './views/One';
import New from './views/New';
import Edit from './views/Edit';
function App() {

  return (
    <div >
      <h1> Pet shelter</h1>
      <Router>
        <Home path="/"  />
        <New path="/new"/>
        <Edit path="/edit/:id"/>
        <One path="/one/:id"/>
      </Router>
    </div>
  )
}

export default App;
