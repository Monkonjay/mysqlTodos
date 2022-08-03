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
};

// /api/todos
router.get('/', async (req, res) => {
    // run codes in try block, if it fails skip to catch block and run the code
    try {
        const getAllTodos = 'SELECT * FROM todos'
        const [ todos ] = await connection.query(getAllTodos);
        res.json(todos);

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
   const getTodoById = 'SELECT * FROM todos WHERE id = ? LIMIT 1;';

   try {
    const [ queryResult ] = await connection.query(insertTodoQuery, [todo]);
    const [ todos ] = await connection.query(getTodoById, [queryResult.insertId]);
    res.json(todos[0]);
   }
   catch(error) {
    res.status(500).json(error);

   }
});

module.exports = router;