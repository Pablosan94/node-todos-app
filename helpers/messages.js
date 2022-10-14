require('colors');

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log('=================='.green);
    console.log(' Select an option'.green);
    console.log('==================\n'.green);

    console.log(`${'1.'.green} Create to-do`);
    console.log(`${'2.'.green} List to-dos`);
    console.log(`${'3.'.green} List complete to-dos`);
    console.log(`${'4.'.green} List pending to-dos`);
    console.log(`${'5.'.green} Complete to-do(s)`);
    console.log(`${'6.'.green} Remove to-do`);
    console.log(`${'0.'.green} Exit\n`);

    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question('Select an option: ', (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`Press ${'ENTER'.green} to continue\n`, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
