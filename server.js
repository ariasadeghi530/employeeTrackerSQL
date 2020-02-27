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
  "View total utilized budget of a department",
  "Exit"
];
function viewAll(){
  db.query(`SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee`,(err,employees) => {
    if (err) throw err;
    console.log('');
    console.table(employees);
  })
}

function init() {
  prompt([
    {
      type: 'list',
      name: 'listlist',
      message: 'Pick a list',
      choices: initChoices
    }
  ]).then(({ listlist }) => {
    console.log(listlist);
    switch (listlist) {
      case "View all employees":
      viewAll();
        break;
      case "View all employees by department":

        break;
      case "View all employees by manager":

        break;
      case "Add employee":

        break;
      case "Remove employee":

        break;
      case "Update employee role":

        break;
      case "Update employee manager":

        break;
      case "Add role":

        break;
      case "Remove role":

        break;
      case "View all roles":

        break;
      case "Add department":

        break;
      case "Remove department":

        break;
      case "View all departments":

        break;
      case "View total utilized budget of a department":

        break;

      case "Exit":

        break;

      default:
        break;
    }
    init();

  }).catch(e => console.log(e))
}

init();