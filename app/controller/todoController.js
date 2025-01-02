const { Todo } = require('../db/models');

/**
 * buat sebuah function yang melakukan crud
 * 1. buat statement get all
 * 2. lalu buat statement yang mereturn sebuah statment todo
 */

module.exports = {
    index: async (req, res) => {

        const todo = await Todo.findAll();

        return res.status(200).json({
            status: 'success',
            result: todo
        });
    }
}