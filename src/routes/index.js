const express = require('express');
const notebooksRouter = require('./notebookRouter');

const routes = express.Router();

routes.use('/notebooks', notebooksRouter);

module.exports = routes;