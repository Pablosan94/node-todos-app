const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      { value: '1', name: `Create to-do` },
      { value: '2', name: `List to-dos` },
      { value: '3', name: `List complete to-dos` },
      { value: '4', name: `List pending to-dos` },
      { value: '5', name: `Complete to-do(s)` },
      { value: '6', name: `Remove to-do` },
      { value: '0', name: `Exit` },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('=================='.green);
  console.log(' Select an option'.white);
  console.log('==================\n'.green);

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'pause',
      message: `Press ${'ENTER'.green} to continue`,
    },
  ];

  console.log('\n');
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please input a valid value';
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);

  return description;
};

const todoDeleteForm = async (todos = []) => {
  const choices = todos.map((todo) => {
    return { value: todo.id, name: todo.description };
  });

  const question = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete to-do',
      choices,
    },
  ];

  const { id } = await inquirer.prompt(question);

  return id;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  todoDeleteForm,
};
