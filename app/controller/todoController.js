const { Todo } = require('../db/models');
const {body, validationResult} = require("express-validator");

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
    },
    store: [
        body('title').notEmpty().withMessage('Title cannot be empty'),
        body('description').notEmpty().withMessage('Description cannot be empty'),

        async (req, res) => {
            try {
                const errors = validationResult(req);

                if (!errors.isEmpty()) {
                    return res.status(400).json({
                        status: 'error',
                        errors: errors.array()
                    });
                }

                const { title, description } = req.body;

                const user = await Todo.create({ title, description });

                return res.status(201).json({
                    status: 'success',
                    result: user
                });
            } catch (error) {
                return res.status(500).json({
                    status: 'error',
                    message: error.message
                })
            }
        }

    ],
    show: async (req, res) => {
        try {
            const { id } = req.params;

            const todo = await Todo.findByPk(id);

            return res.status(200).json({
                status: 'success',
                result: todo
            });
        } catch (error) {
            return res.status(500).json({
                status: 'error',
                message: error.message
            })
        }
    },
    update: async (req, res) => {
        const { id } = req.params;

        return res.status(200).json({
            status: 'success',
            result: id
        });
    },
    delete: async (req, res) => {
        const { id } = req.params;

        return res.status(200).json({
            status: 'success',
            result: 'ok'
        })
    }
}