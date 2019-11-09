const files = require('./files');
const chalk = require('chalk');
const figlet = require('figlet');
const git = require('simple-git/promise')();
const CLI = require('clui');
const { exec } = require('child_process');

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

  cloneRepository: (project) => {
    const status = new Spinner('Cloning remote repository...');
    status.start();
    if (project.project === "NodeJs with Typescript"){
      return git.clone('https://github.com/Danielshow/node_typescript')
        .then(exec(`mv node_typescript ${project.name}`, (err, stdout, stderr) => {
          if(err){
            console.error(err)
          }
        })).finally(status.stop())
    } else if(project.project === 'NodeJs with Typescript') {

    }else {
      console.log(chalk.yellowBright("Nothing was chosen"))
    }
  }
}