const { request } = require('express');
const express = require('express');
const app = express();

const authors = [
    {
        firstName: "Lawrence",
        lastName: "Nowell",
        nationality: "UK",
        books: ["Beowulf"],
        id: 1

    },
    {
        firstName: "William",
        lastName: "Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
        id: 2

    },
    {
        firstName: "Charles",
        lastName: "Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"],
        id: 3

    },
    {
        firstName: "Oscar",
        lastName: "Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
        id: 4

    }
]

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.send('Authors API');
});

app.get("/authors/:id", (req, res) => {
    const found = authors.find(
        (authors) => authors.id === parseInt(req.params.id)
    ); if (req.params.id > authors.length) {
        res.send(`the author with ID ${parseInt(req.params.id)} does not exist`)
    } else {
        res.send(`${found.firstName} ${found.lastName}, ${found.nationality}`);
    }
});

app.get("/authors/:id/books", (request, response) => {
    const found = authors.find(
        (authors) => authors.id === parseInt(request.params.id)
    );
    response.send(`${found.books.join(", ")}`);
});

app.get("/json/authors/:id", (req, res) => {
    const found = authors.find(
        (authors) => authors.id === parseInt(req.params.id)
    ); if (req.params.id > authors.length) {
        res.send(`the author with ID ${parseInt(req.params.id)} does not exist`)
    } else {
        res.send(found);
    }
});

app.get("/json/authors/:id/books", (request, response) => {
    const found = authors.find(
        (authors) => authors.id === parseInt(request.params.id)
    );
    response.send(found.books);
});

app.get("*", (req, res) => {
    res.send("error");
})

