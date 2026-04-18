def ordenar(lista: list, ascendente=True):
    if ascendente:
        return sorted(lista)
    else:
        return sorted(lista, reverse=True)

def ordenar2(lista: list, ascendente=True):
    if ascendente:
        lista.sort()   #
    else:
        lista.reverse()   #lista.sort(reverse=True)
    return lista


list = [7, 12, 9, 11, 3]

print(ordenar2(list))
print(ordenar2(list, False))

