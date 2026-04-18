function ordenar(lista: number[], ascendente: boolean)
{
    lista = ascendente == false ? lista.toSorted() : lista.toReversed();
    return lista;
}

const lista: number[] = [7, 12, 9, 11, 3]
console.log("Lista ascendente")
console.log(ordenar(lista, true))
console.log("Lista descendente")
console.log(ordenar(lista, false))