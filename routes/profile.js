const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        message: 'hello user'
    });
});

router.post('/', (req, res) => {
    return res.status(201).json({
        status: 'ok',
        message: 'data created'
    })
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    return res.status(200).json({
        status: 'hallo',
        message: 'Data Updated',
        data: id
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    return res.status(200).json({
        status: 'hello',
        message: 'data deleted',
        data: id
    });
});

module.exports = router;