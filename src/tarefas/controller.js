const TaskService = require("./service");

class Controller {

  list(req, res) {
    console.log('Entrou no controller list')
    const tasks = TaskService.findAll();
    res.json(tasks);
  }

  listById(req, res) {
    console.log('Entrou no controller listById')
    const task = TaskService.findById(req.params.id);
    res.json(task);
  }

  create(req, res) {
    console.log('Entrou no controller create')

    const text = req.body.text;
    const status = req.body.status;

    TaskService.addTask({ text: text, status: status });
    res.json({ "success": true });
  }

  update(req, res) {
    console.log('Entrou no controller update');
    console.log(req.body);
    const newTask = {
      id: req.params.id,
      text: req.body.text, // undefined
      status: req.body.status // undefined
    };
    console.log(newTask)
    TaskService.updateTask(newTask);

    res.json({ "success": true });
  }

  remove(req, res) {
    console.log('Entrou no controller remove')

    const id = req.params.id;
    const status = TaskService.removeTask(id);

    res.json({ "success": status });
  }
}

const TaskController = new Controller();

module.exports = TaskController;