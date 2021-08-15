const TASK_LIST = [
  { id: 1, text: 'Primeira Tarefa', status: 'pending' },
  { id: 2, text: 'Segunda Tarefa', status: 'pending' },
  { id: 3, text: 'Terceira Tarefa', status: 'completed' },
  { id: 4, text: 'Quarta Tarefa', status: 'completed' },
  { id: 5, text: 'Quinta Tarefa', status: 'pending' }
];

// auto-incremento
let nextId = TASK_LIST.length + 1;

class Service {

  findAll() {
    return TASK_LIST;
  }

  findById(id) {
    return TASK_LIST.find(task => task.id === +id);
  }

  addTask(task) {
    task.id = nextId++;
    TASK_LIST.push(task);
  }

  updateTask(newTask) {
    const oldTask = this.findById(newTask.id);
    oldTask.text = newTask.text;
    oldTask.status = newTask.status;
  }

  removeTask(id) {

    if (!this.findById(id)) {
      return false
    }

    for (let i = 0; i < TASK_LIST.length; i++) {
      if (TASK_LIST[i].id == id) {
        TASK_LIST.splice(i, 1);
        return true
      }
    }
  }

}

const TaskService = new Service();

module.exports = TaskService;