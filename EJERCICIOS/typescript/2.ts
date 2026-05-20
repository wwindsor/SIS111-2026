import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

function calcular(num1: number, num2: number, opcion: number): number | string {
  if (opcion === 1) return num1 + num2;
  if (opcion === 2) return num1 - num2;
  if (opcion === 3) return num1 * num2;
  if (opcion === 4) {
    if (num2 === 0) return 'No se puede dividir entre cero.';
    return num1 / num2;
  }

  return 'Opcion invalida.';
}

async function pedirNumero(mensaje: string): Promise<number> {
  return Number(await rl.question(mensaje));
}

async function mostrarMenu(): Promise<void> {
  let opcion = 0;

  while (opcion !== 5) {
    console.log('\n===== MENU =====');
    console.log('1. Sumar numeros');
    console.log('2. Restar numeros');
    console.log('3. Multiplicar numeros');
    console.log('4. Dividir numeros');
    console.log('5. Salir');

    opcion = Number(await rl.question('Elija una opcion: '));

    if (opcion >= 1 && opcion <= 4) {
      const num1 = await pedirNumero('Ingrese el primer numero: ');
      const num2 = await pedirNumero('Ingrese el segundo numero: ');

      if (Number.isNaN(num1) || Number.isNaN(num2)) {
        console.log('Error: debe ingresar numeros validos.');
      } else {
        console.log(`El resultado es: ${calcular(num1, num2, opcion)}`);
      }
    } else if (opcion === 5) {
      console.log('Saliendo del programa...');
    } else {
      console.log('Error: opcion invalida.');
    }
  }
}

await mostrarMenu();
rl.close();

