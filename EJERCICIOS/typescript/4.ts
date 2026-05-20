import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function area(radio: number, altura: number): number {
  return 2 * Math.PI * Math.pow(radio, 2) + 2 * Math.PI * radio * altura;
}

function volumen(radio: number, altura: number): number {
  return Math.PI * Math.pow(radio, 2) * altura;
}

async function ingresarDatos(): Promise<{ radio: number; altura: number }> {
  console.log('Ingrese el radio del Cilindro');
  const radio = Number(await rl.question(''));

  console.log('Ingrese la altura del Cilindro');
  const altura = Number(await rl.question(''));

  return { radio, altura };
}

async function mostrar(): Promise<void> {
  const { radio, altura } = await ingresarDatos();

  console.log(`Este el area del cilindro ${area(radio, altura)}`);
  console.log(`Este el volumen del cilindro ${volumen(radio, altura)}`);
}

await mostrar();
rl.close();

