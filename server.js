const db = require('./config/db.js');
const prompt = require('inquirer').createPromptModule();

cosnt initChoices = [
  "View all employees",
  ""
]
prompt([
  {
    type: 'list',
    name: 'listlist',
    message: 'Pick a list',
    choices: [
      "a",
      "m",
      "n"
    ]
}
]).then(response => {
  console.log(response);
}).catch(e => console.log(e))