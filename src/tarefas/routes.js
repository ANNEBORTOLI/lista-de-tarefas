const express = require('express');
const TaskController = require('./controller');
const router = express.Router();

router.get('/', TaskController.list);

router.get('/:id', TaskController.listById);

router.post('/', TaskController.create);

router.put('/:id', TaskController.update);

router.delete('/:id', TaskController.remove);

module.exports = router;