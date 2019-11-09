const files = require('./files');
const chalk = require('chalk');
const figlet = require('figlet');
const git = require('simple-git/promise')();
const CLI = require('clui');
const { exec } = require('child_process');
const inquirer = require('./inquirer');

const Spinner = CLI.Spinner;

module.exports = {
  isGitRepository: () => {
    if (files.directoryExists('.git')) {
      console.log(chalk.red('This folder is already a Git repository!'));
      console.log(
        chalk.yellow(
          figlet.textSync('Thank you', 'Caligraphy')
        )
      );
      process.exit();
    }
  },

  cloneRepository: async (project) => {
    const status = new Spinner('Cloning remote repository...');
    status.start();
    if (project.project === "NodeJs with Typescript"){
      await git.clone('https://github.com/Danielshow/node_typescript')
      await exec(`mv node_typescript ${project.name}`)
    } else if(project.project === 'NodeJs with Babel') {
      await git.clone('https://github.com/Danielshow/node_babel')
      await exec(`mv node_babel ${project.name}`)
    }else {
      console.log(chalk.yellowBright("Nothing was chosen"))
    }
    status.stop()
    inquirer.done();
  }
}