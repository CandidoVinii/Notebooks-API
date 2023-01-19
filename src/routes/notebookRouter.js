const express = require('express');
const { notebooksController, notebookForId } = require('../controller/notebookController');

const router = express.Router();

router.get('/', notebooksController);
router.get('/:id', notebookForId);


module.exports = router;