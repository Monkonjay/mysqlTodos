const express = require('express');
const mysql = require('mysql2');
// const routes = require('./routes');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'todos_db',
//     password: 'password',
// })

const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use(routes);

// app.get('/api/todos', (req, res) => {
//     connection.query('SELECT * FROM todos;' , (err, rows) => {
//         if (err) {
//             return res.status(404).json(err);
//         }

//         console.log("**************** I AM ROWS**************");
//         console.log(rows);
//         res.json(rows);
       

//     });
// });


app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));