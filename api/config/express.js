const express = require('express')
const consign = require('consign');
const bodyParse = require('body-parser');
const cors = require('cors')
const app = express();
const path = require('path');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('./public'));

consign({})
    .include('models')
    .then('routes')
    .into(app);

module.exports = app;