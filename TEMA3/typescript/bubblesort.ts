function bubblesort(lista: number[], ascendente: boolean){
const cantidad = lista.length;
    for(let i=0;i<cantidad-1;i++) {
        for(let j=0;j<cantidad-i-1;j++) {
         if ((ascendente && lista[j] > lista[j + 1]) ||
         (!ascendente && lista[j] < lista[j + 1]))
         //Esto no funciona se tiene que usar desestructuración
         //lista[j],lista[j+1] = lista[j+1],lista[j]
         [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
        }
    }
    return lista
}
const list = [7, 12, 9, 11, 3]

console.log(bubblesort(list, true))
console.log(bubblesort(list,false))