const inquirer = require('inquirer')
const files = require('./files');

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
  }
}