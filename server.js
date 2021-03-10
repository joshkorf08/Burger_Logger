const express = require("express");
const routes = require("./controllers/burgers_controller.js");
//const express = require('express');

const PORT = process.env.PORT || 3306;

const app = express();

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burger_controller.js');

app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));