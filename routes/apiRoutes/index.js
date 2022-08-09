const router = require('express').Router();
const todoRoutes = require('./todoRoutes');

/* /api/todos */

router.use('/todos', todoRoutes);

module.exports = router;