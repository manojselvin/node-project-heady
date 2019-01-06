const express = require('express');
const hbs = require('hbs');

var app = express();


hbs.registerPartials(`${__dirname}/views/partials`)
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});
app.set('view engine', 'hbs');
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
