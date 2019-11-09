var inquirer = require('inquirer');

const init = () => {
  console.log("Lets start")
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
