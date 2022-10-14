const { storeData, retrieveData } = require('./helpers/fileState');
const {
  inquirerMenu,
  pause,
  readInput,
  todoCompleteForm,
  todoDeleteForm,
  confirm,
} = require('./helpers/inquirer');
const Todos = require('./models/todos');

require('colors');

const main = async () => {
  let option = '0';
  const todos = new Todos();

  const todosData = retrieveData() || [];
  if (todosData) {
    todos.loadData(todosData);
  }

  do {
    option = await inquirerMenu();

    switch (option) {
      case '1':
        const description = await readInput('Describe the to-do: ');
        todos.createTodo(description);
        break;
      case '2':
        todos.listAllWithStatus();
        break;
      case '3':
        todos.listComplete();
        break;
      case '4':
        todos.listPending();
        break;
      case '5':
        const ids = await todoCompleteForm(todos.list);
        todos.toggleCompleted(ids);
        break;
      case '6':
        const id = await todoDeleteForm(todos.list);
        if (id !== 'Cancel') {
          const ok = await confirm(
            'Are you sure you want to delete this to-do?'
          );
          if (ok) {
            todos.deleteTodo(id);
          }
        }
        break;
    }

    storeData(JSON.stringify(todos.list));

    if (option !== '0') await pause();
  } while (option !== '0');
};

console.clear();
main();
