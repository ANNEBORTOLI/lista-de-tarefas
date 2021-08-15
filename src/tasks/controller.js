const TaskService = require("./service");

class Controller {

  list(req, res) {
    const tasks = TaskService.findAll();

    if (tasks.length == 0) {
      res.json({ "status": "No tasks found" });
    }
    res.json(tasks);
  }

  listById(req, res) {
    const task = TaskService.findById(req.params.id);

    if (!task) {
      res.json({ "status": "Task not found" })
    }
    res.json(task);
  }

  create(req, res) {
    const text = req.body.text;
    const status = req.body.status;

    if (text.length <= 2) {
      res.json({ "error": "Invalid text" })
    }

    TaskService.addTask({ text: text, status: status });
    res.json({ "success": true });
  }

  update(req, res) {
    const newTask = {
      id: req.params.id,
      text: req.body.text,
      status: req.body.status
    };

    if (newTask.text.length <= 2) {
      res.json({ "error": "Invalid text" })
    }

    TaskService.updateTask(newTask);
    res.json({ "success": true });
  }

  remove(req, res) {

    const id = req.params.id;
    const status = TaskService.removeTask(id);
    res.json({ "success": status });
  }
}

const TaskController = new Controller();

module.exports = TaskController;