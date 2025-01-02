const express = require('express');
const router = express.Router();
const { index, store, show } = require('../app/controller/todoController');

router.get('/', index);
router.post('/', store);
router.get('/:id', show);

module.exports = router;