const express = require('express')
const consign = require('consign');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

consign({})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

module.exports = app;