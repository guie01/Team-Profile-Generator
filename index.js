const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/renderHTML");

let newEmployees = [];

initialQuestions = () => {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'position',
      message: 'What is the employee position?',
      choices: ['Engineer', 'Intern', 'Manager', 'No More To Add']
    },
  ])
  .then((choice) => {
    switch(choice.position){
        case "Engineer":
            engineerQuestions();
            break;
        case "Intern":
            internQuestions();
            break;
        case "Manager":
            managerQuestions();
            break;
        case "No More To Add":
            renderHTML(newEmployees);
            fs.writeFile("./sample/index.html", renderHTML(newEmployees), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    }
  });
}


engineerQuestions = () => {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the employee GitHub?'
      },
  ])
  .then((input) => {
    const newEngineer = new Engineer(input.name, input.id, input.email, input.github);
    newEmployees.push(newEngineer);
    initialQuestions();

  });
} 

internQuestions = () => {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?'
      },
      {
        type: 'input',
        name: 'school',
        message: 'What is the employee school?'
      },
  ])
  .then((input) => {
    const newIntern = new Intern(input.name, input.id, input.email, input.school);
    newEmployees.push(newIntern);
    initialQuestions();

  });
}

managerQuestions = () => {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?'
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is the employee office number?'
      },
  ])
  .then((input) => {
    const newManager = new Manager(input.name, input.id, input.email, input.office);
    newEmployees.push(newManager);
    initialQuestions();

  });
}

initialQuestions();

