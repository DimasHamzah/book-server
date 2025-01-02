const express = require('express');
const router = express.Router();
const { index } = require('../app/controller/todoController');

router.get('/', index);

module.exports = router;