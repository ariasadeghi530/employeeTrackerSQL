const db = require('./config/db.js');
const prompt = require('inquirer').createPromptModule();

const initChoices = [
  "View all employees",
  "View all employees by department",
  "View all employees by manager",
  "Add employee",
  "Remove employee",
  "Update employee role",
  "Update employee manager",
  "Add role",
  "Remove role",
  "View all roles",
  "Add department",
  "Remove department",
  "View all departments",
  "View total utilized budget of a department"
];


prompt([
  {
    type: 'list',
    name: 'listlist',
    message: 'Pick a list',
    choices: initChoices
}
]).then(response => {
  console.log(response);
}).catch(e => console.log(e))