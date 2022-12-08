const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`o nome e ${nome} e a profissao e ${profissao}`);
