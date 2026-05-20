import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const PRODUCTOS: Record<number, string> = {
  1: 'televisores',
  2: 'refrigeradores',
  3: 'lavadoras',
};

type Compra = {
  codigo: number;
  cantidad: number;
  precioUnitario: number;
};

type Resumen = Record<number, { cantidad: number; total: number }>;

async function ingresarCodigo(): Promise<number> {
  while (true) {
    console.log('\nSeleccione el producto: ');
    console.log('1. Televisores');
    console.log('2. Refrigeradores');
    console.log('3. Lavadoras');

    const codigo = Number(await rl.question('Ingrese el codigo del producto: '));

    if (codigo in PRODUCTOS) {
      return codigo;
    }

    console.log('Error: el codigo ingresado no es valido. Solo puede ingresar 1, 2, 3');
  }
}

async function ingresarCantidad(): Promise<number> {
  while (true) {
    const cantidad = Number(await rl.question('Ingrese la cantidad: '));

    if (Number.isInteger(cantidad) && cantidad > 0) {
      return cantidad;
    }

    console.log('Error: debe ingresar un numero entero mayor a cero');
  }
}

async function ingresarPrecioUnitario(): Promise<number> {
  while (true) {
    const precio = Number(await rl.question('Ingrese el precio unitario: '));

    if (precio > 0) {
      return precio;
    }

    console.log('Error: el precio unitario debe ser mayor a cero');
  }
}

async function ingresarDatos(): Promise<Compra[]> {
  const compras: Compra[] = [];

  for (let visita = 1; visita <= 3; visita++) {
    console.log(`\n--- Visita ${visita} a CyberSTORE ---`);
    const codigo = await ingresarCodigo();
    const cantidad = await ingresarCantidad();
    const precioUnitario = await ingresarPrecioUnitario();

    compras.push({ codigo, cantidad, precioUnitario });
  }

  return compras;
}

function calcularTotales(compras: Compra[]): Resumen {
  const resumen: Resumen = {
    1: { cantidad: 0, total: 0 },
    2: { cantidad: 0, total: 0 },
    3: { cantidad: 0, total: 0 },
  };

  for (const compra of compras) {
    resumen[compra.codigo].cantidad += compra.cantidad;
    resumen[compra.codigo].total += compra.cantidad * compra.precioUnitario;
  }

  return resumen;
}

function mostrar(resumen: Resumen): void {
  console.log('\n==========RESUMEN DE LA COMPRA===========');

  for (const codigoTexto of Object.keys(resumen)) {
    const codigo = Number(codigoTexto);
    const datos = resumen[codigo];
    const nombreProducto = PRODUCTOS[codigo];

    console.log(`Se compraron ${datos.cantidad} ${nombreProducto}, a un total de ${datos.total.toFixed(2)}`);
  }
}

async function principal(): Promise<void> {
  const compras = await ingresarDatos();
  const resumen = calcularTotales(compras);
  mostrar(resumen);
}

await principal();
rl.close();

