const Todo = require('./todo');

class Todos {
  constructor() {
    this._list = {};
  }

  get list() {
    const array = [];
    Object.keys(this._list).forEach((key) => {
      const todo = this._list[key];
      array.push(todo);
    });

    return array;
  }

  loadData(todos = []) {
    todos.forEach((todo) => {
      this._list[todo.id] = todo;
    });
  }

  createTodo(description = '') {
    const todo = new Todo(description);
    this._list[todo.id] = todo;
  }

  listAllWithStatus() {
    Object.values(this._list).forEach((todo) => {
      console.log(
        `${todo.description} :: ${
          todo.completedAt ? 'Complete'.green : 'Pending'.red
        }`
      );
    });
  }

  listComplete() {
    const completedTodos = Object.values(this._list).filter(
      (todo) => todo.completedAt
    );

    if (completedTodos.length) {
      completedTodos.forEach((todo) => {
        console.log(`${todo.description.green} :: ${todo.completedAt}`);
      });
    } else {
      console.log(`There are no completed to-dos!`);
    }
  }

  listPending() {
    const pendingTodos = Object.values(this._list).filter(
      (todo) => !todo.completedAt
    );

    if (pendingTodos.length) {
      pendingTodos.forEach((todo) => {
        console.log(`${todo.description.red}`);
      });
    } else {
      console.log(`There are no pending to-dos!`);
    }
  }

  deleteTodo(id = '') {
    if (this._list[id]) {
      delete this._list[id];
    }
  }
}

module.exports = Todos;
