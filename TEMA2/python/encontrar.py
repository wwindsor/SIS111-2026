#Elaborar un algoritmo dado un numero limite = n de aleatorios entre 1 y 100, encontrar las coincidencias de x

import random;
def generar(limite):
    numerosRan = []
    for count in range(limite):
        numero = random.randint(1,100)
        numerosRan.append(numero)
    return numerosRan

def buscar(x, limite):
    coin = 0
    aleatorios = generar(limite)
    for numero in aleatorios:
        if(numero==x): coin+=1
    return {"mensaje":f"Numero de coincidencias para {x} es de: {coin}", "resultado":aleatorios} 

print("********Busqueda en Array**********")
print('Introduzca el limite: ')
limite = int(input())
print('Introduzca el numero que desea buscar: ')
x = int(input())
print(buscar(x,limite))