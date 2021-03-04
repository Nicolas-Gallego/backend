const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
const port = 8000;
app.use(cors());
app.use(bodyParser.json())
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
  });

  const students = [
      {
          name: "Allan"
      },
     {
         name: "Houra"
     },
     {
         name: "Ewa"
     },
     {
         name: "Damir"
     } 
  ]

  app.get("/", (req, res) => {
    res.json(students);
  })
  console.log(students)

  app.post("/add", (req, res) => {
      students.push(req.body);
      res.send("student added")
  })