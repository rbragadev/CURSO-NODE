const chalk = require('chalk');

const nota = 6;

if (nota >= 7) {
  console.log(chalk.green.bold('Parabens voce foi aprovado'));
} else {
  console.log(chalk.bgRed.black('Voce precisa fazer a recuperacao'));
}
