import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function tipoCambio(): Promise<{ dolar: number; euro: number }> {
  console.log('Ingrese el tipo de cambio de $us');
  const dolar = Number(await rl.question(''));

  console.log('Ingrese el tipo de cambio de Euro');
  const euro = Number(await rl.question(''));

  return { dolar, euro };
}

async function conversion(): Promise<{ dolares: number; euros: number }> {
  const { dolar, euro } = await tipoCambio();

  console.log('Ingrese los Bolivianos');
  const bolivianos = Number(await rl.question(''));

  const dolares = bolivianos / dolar;
  const euros = bolivianos / euro;

  return { dolares, euros };
}

async function mostrar(): Promise<void> {
  const { dolares, euros } = await conversion();

  console.log(`Tienes actualmente ${dolares} dolares`);
  console.log(`Tienes actualmente ${euros} euros`);
}

await mostrar();
rl.close();

