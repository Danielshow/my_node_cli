#!/usr/bin/env node
const github = require('./lib/github');
const inquirer = require('./lib/inquirer');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const { exec } = require('child_process');

const init = async () => {
  clear();
  console.log(
    chalk.yellow(
      figlet.textSync('My NODE CLI', { horizontalLayout: 'full' })
    )
  );
  //github.isGitRepository()
  const project = await inquirer.chooseProject()
  await github.cloneRepository(project)
  await exec(`cd ${project.name}`)
  // await inquirer.done()
}

init()