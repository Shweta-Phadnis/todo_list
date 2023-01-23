const express = require('express')
const router = express.Router()
const tasksOperations = require('../controller/tasksOperations')

router.get('/', tasksOperations.getTasks)
router.post('/', tasksOperations.addTask)
router.put('/completed/:id', tasksOperations.updateTask)
router.put('/status/:id', tasksOperations.updateTaskStatus)
router.delete('/:id', tasksOperations.deleteTask)


module.exports = router