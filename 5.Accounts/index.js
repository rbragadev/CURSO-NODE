// external modules
const inquirer = require('inquirer');
const chalk = require('chalk');

//internal modules
const fs = require('fs');

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que voce deseja fazer?',
        choices: [
          'criar conta',
          'consultar saldo',
          'Depositar',
          'Sacar',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      const action = answer['action'];

      console.log(action);
    })
    .catch((err) => console.log(err));
}
