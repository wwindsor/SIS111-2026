import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function area(base: number, altura: number): number {
  return (base * altura) / 2;
}

console.log('Ingrese la base del triangulo');
const base = Number(await rl.question(''));

console.log('Ingrese la altura del triangulo');
const altura = Number(await rl.question(''));

console.log(area(base, altura));
rl.close();

