const express = require('express');
const homeController = require('../controllers/HomeController');

const routes = express.Router();

routes.get('/', homeController.home);
routes.get('/users', homeController.getUsers);
routes.get('/posts', homeController.getPosts);

module.exports = routes;