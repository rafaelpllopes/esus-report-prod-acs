const express = require('express')
const consign = require('consign');
const bodyParse = require('body-parser');
const cors = require('cors')
const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(cors());

consign({})
    .include('models')
    .then('routes')
    .into(app);

module.exports = app;