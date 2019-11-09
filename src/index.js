const inquirer = require('inquirer');
const files = require('./lib/files');
const github = require('./lib/github');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const init = () => {
  clear();
  console.log(
    chalk.yellow(
      figlet.textSync('My NODE CLI', { horizontalLayout: 'full' })
    )
  );

  github.isGitRepository()
  inquirer.prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [
        'Order a pizza',
        'Make a reservation',
        new inquirer.Separator(),
        'Ask for opening hours',
        'Talk to the receptionist'      
      ]
    },
  ]).then(answers => {
    
  })
}

init()
