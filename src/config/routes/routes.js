const express = require('express');
const routes = express.Router();

const dealController = require('../../controllers/dealController');

routes.post('/deals/trigger', dealController.trigger);
routes.get('/deals', dealController.list);

module.exports = routes;