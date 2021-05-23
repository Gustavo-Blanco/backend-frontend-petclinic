const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/routes');
const app = express();

const {mongoose} = require('./database');

app.set("port", process.env.PORT || 3001);

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use("",routes);


app.listen(app.get("port"));