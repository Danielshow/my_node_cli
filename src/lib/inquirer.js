const inquirer = require('inquirer')
const files = require('./files');
const chalk = require('chalk');
const figlet = require('figlet');

module.exports = {
  chooseProject: () => {
    const questions = [
      {
        type: 'list',
        name: 'project',
        message: 'What node project do you want to do?',
        choices: [
          'NodeJs with Babel',
          'NodeJs with Typescript',
          new inquirer.Separator(),     
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the project:',
        default: files.getCurrentDirectoryBase(),
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter a name for the project.';
          }
        }
      }
    ]

    return inquirer.prompt(questions)
  },

  done: () => {
    console.log(
      chalk.yellow(
        "cloned successfully"
      )
    )
    console.log(
      chalk.yellow(
        figlet.textSync('Thank you', "Caligraphy")
      )
    );
  }
}