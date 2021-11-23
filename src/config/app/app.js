const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
require('dotenv').config();
const app = express();

app.use(express.json());

app.use(cors());

requireDir('../../models');

app.use('/api', require('../routes/routes'));

module.exports = app;