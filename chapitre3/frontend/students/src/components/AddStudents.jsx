import { useState } from "react";

const AddStudents = (props) => {
  const [name, setName] = useState("");

  const add = () => {
    let added = false;
    for (let i = 0; i < props.students.length; i++) {
      if (name === props.students[i].name) {
        added = true;
      }
    }
    if ((added = false)) {
      fetch("http://localhost:8000/add", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase()
        }),
      });
    } else {
      return alert("Student already added !")
    }
  };

  return (
    <>
      <h1>Add Students</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <button onClick={add}>Add</button>
    </>
  );
};

export default AddStudents;
