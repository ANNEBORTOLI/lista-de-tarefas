const TASK_LIST = [
  { id: 1, text: 'Primeira Tarefa', status: 'pending' },
  { id: 2, text: 'Segunda Tarefa', status: 'pending' },
  { id: 3, text: 'Terceira Tarefa', status: 'completed' }
];

// auto-incremento
let nextId = TASK_LIST.length + 1;

class Service {

  findAll() {
    console.log('Entrou no service findAll')
    return TASK_LIST;
  }

  findById(id) {
    console.log('Entrou no service findById com o id=', id);
    return TASK_LIST.find(task => task.id === +id);
  }

  addTask(task) {
    console.log('Entrou no service addTask');
    task.id = nextId++;
    TASK_LIST.push(task);
  }

  updateTask(newTask) {
    console.log('Entrou no service updateTask');
    const oldTask = this.findById(newTask.id);
    oldTask.text = newTask.text;       // undefined
    oldTask.status = newTask.status;  // undefined
  }

  removeTask(id) {
    console.log('Entrou no service remove');

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