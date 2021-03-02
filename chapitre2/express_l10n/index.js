const express = require("express");
const expressHandlebars = require("express-handlebars");
var translations = require('./translations.json')

const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static('public'));

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get("/:lang?", (req, res) => {
    if (req.params.lang === undefined) {
        res.render("home", {
            bonjour: translations.fr.bonjour,
            flag: translations.fr.flag
        })
    } else {
        res.render("home", {
            bonjour: translations[req.params.lang].bonjour,
            flag: translations[req.params.lang].flag
        })
    }
})