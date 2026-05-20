import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function generarAleatorios(cantidad: number): { pares: number[]; impares: number[] } {
  const pares: number[] = [];
  const impares: number[] = [];

  for (let i = 0; i < cantidad; i++) {
    const numero = Math.floor(Math.random() * 100) + 1;

    if (numero % 2 === 0) {
      pares.push(numero);
    } else {
      impares.push(numero);
    }
  }

  return { pares, impares };
}

function sumar(numeros: number[]): number {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log('Numeros aleatorios pares e impares');
const cantidad = Number(await rl.question('Ingrese la cantidad de numeros aleatorios: '));

if (Number.isNaN(cantidad) || cantidad <= 0) {
  console.log('Error: debe ingresar una cantidad valida mayor a cero.');
} else {
  const { pares, impares } = generarAleatorios(cantidad);

  console.log(`${JSON.stringify(pares)} el total es ${sumar(pares)}`);
  console.log(`${JSON.stringify(impares)} el total es ${sumar(impares)}`);
}

rl.close();

