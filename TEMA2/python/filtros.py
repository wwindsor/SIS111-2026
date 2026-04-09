lst = [1, 2, 3, 4, 5]
#devuelve numeros pares
pares = list(filter(lambda x: x % 2 == 0, lst))
print(pares)