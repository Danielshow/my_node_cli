const github = require('./lib/github');
const inquirer = require('./lib/inquirer');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const init = async () => {
  clear();
  console.log(
    chalk.yellow(
      figlet.textSync('My NODE CLI', { horizontalLayout: 'full' })
    )
  );
  //github.isGitRepository()
  const project = await inquirer.chooseProject()
  console.log(project)
  github.cloneRepository(project)
}

init()
