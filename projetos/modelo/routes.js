const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const formController = require('./src/controllers/formController');

route.get('/', homeController.paginaInicial);
route.post('/', formController.sendForm);

module.exports = route;