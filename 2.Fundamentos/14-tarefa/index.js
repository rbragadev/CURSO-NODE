const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer
  .prompt([
    {
      name: 'p1',
      message: 'Qual o nome do aluno',
    },
    {
      name: 'p2',
      message: 'Qual idade do aluno',
    },
  ])
  .then((answers) => {
    console.log(answers);
    const aluno = answers.p1;
    const idade = answers.p2;

    console.log(chalk.bgYellow.black(`O aluno ${aluno} tem ${idade} anos`));
  });
