import './App.css';
import {useEffect, useState} from "react"
import {BrowserRouter, Switch, Route}from "react-router-dom"
import Students from "./components/Students"
import AddStudents from "./components/AddStudents"


function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000")
    .then((res) => {
      return res.json();
    })
    .then((res)=>{
      setStudents(res)
    })
  }, [])
  return (
    <BrowserRouter>
      <h1>Students</h1>
      <Switch>
        <Route path="/" exact>
          <Students students={students}></Students>
        </Route>
        <Route path="/add" exact>
          <AddStudents students={students}></AddStudents>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;
