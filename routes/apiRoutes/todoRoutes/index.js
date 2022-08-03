const router = require('express').Router();
const connection = require('./../../../db/connection');

const isEven = function(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve('isEven');
        } else{
            reject('isOdd');
        }
    });
}

// /api/todos
router.get('/', async (req, res) => {
    try {
        const result = await isEven(4);
        res.json(result);

    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

router.post('/', async (req, res) => {
   const { todo } = req.body;

   if (todo.trim().length === 0) {
    return res.status(400).json({ error: 'Todo must be valid'});

   }
   const insertTodoQuery = 'INSERT INTO todos (todo) VALUES(?);';

   try {
    const dbResult = await connection.query(insertTodoQuery, [todo]);
   }
   catch(error) {
    res.status(500).json(error)

   }
});

module.exports = router;