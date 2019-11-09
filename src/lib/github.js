const files = require('./files');
const chalk = require('chalk');
const figlet = require('figlet');

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
  }
}