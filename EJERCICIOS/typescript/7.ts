import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

type Producto = {
  codigo: number;
  cantidad: number;
  valor: number;
};

function validar(codigo: number): boolean {
  return codigo === 1 || codigo === 2 || codigo === 3;
}

async function ingresarDatos(): Promise<Producto[]> {
  console.log('Seleccione su producto...');
  console.log('Televisores (codigo 1), Refrigeradores (codigo 2), Lavadoras (codigo 3)');

  const productos: Producto[] = [];

  for (let i = 0; i < 3; i++) {
    console.log('Ingresar codigo');
    const codigo = Number(await rl.question(''));

    if (validar(codigo)) {
      console.log('Ingresar la cantidad');
      const cantidad = Number(await rl.question(''));

      console.log('Ingresar el valor');
      const valor = Number(await rl.question(''));

      productos.push({ codigo, cantidad, valor });
    } else {
      console.log('error');
    }
  }

  return productos;
}

async function calculo1(): Promise<void> {
  const productos = await ingresarDatos();
  let cantidad1 = 0;
  let cantidad2 = 0;
  let cantidad3 = 0;
  let valor1 = 0;
  let valor2 = 0;
  let valor3 = 0;

  for (const producto of productos) {
    if (producto.codigo === 1) {
      cantidad1 += producto.cantidad;
      valor1 += producto.valor * producto.cantidad;
    }

    if (producto.codigo === 2) {
      cantidad2 += producto.cantidad;
      valor2 += producto.valor * producto.cantidad;
    }

    if (producto.codigo === 3) {
      cantidad3 += producto.cantidad;
      valor3 += producto.valor * producto.cantidad;
    }
  }

  console.log(`Se compraron ${cantidad1} televisores, a un total de ${valor1}`);
  console.log(`Se compraron ${cantidad2} refrigeradores, a un total de ${valor2}`);
  console.log(`Se compraron ${cantidad3} lavadoras, a un total de ${valor3}`);
}

await calculo1();
rl.close();

