// Built-in Modules
const express = require('express');
const fs = require('fs');

// Third-party Modules
const hbs = require('hbs');

// Creating Express App
var app = express();

// Setting Partials Directory
hbs.registerPartials(`${__dirname}/views/partials`)

// Registering Helpers
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// Setting template engine
app.set('view engine', 'hbs');

// Logging Requests to file
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    fs.appendFile('server.log', `${log}\n`);
    next();
})

// Static Files Middleware
app.use(express.static(`${__dirname}/public`));

var port = 3000;
 
app.get("/", (req, res) => {
 res.send({
     name: 'Manoj Selvin',
     id: 1
 });
});

app.get("/about", (req, res) => {
    res.render('about', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
   });
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});
