def bubblesort(lista, ascendente=True):
    cantidad = len(lista)
    for i in range(cantidad-1):
        for j in range(cantidad-i-1):
            #aux = 0
                if (ascendente and lista[j] > lista[j + 1]) or \
                (not ascendente and lista[j] < lista[j + 1]):
                #Sin manejo de auxiliares y manejo de respectivos#
                    lista[j],lista[j+1] = lista[j+1],lista[j]
                #Con manejo de auxiliares#
                    # aux = lista[j]
                    # lista[j] = lista[j+1]
                    # lista[j+1] = aux
    return lista

list = [7, 12, 9, 11, 3]

print(bubblesort(list, True))
print(bubblesort(list,False))

