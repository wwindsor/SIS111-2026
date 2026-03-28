import random;
def aleatorios(n):
    count = 0
    pares = ""
    impares = ""
    while count < n: # cambio a for: for count in range(n):
        numero = random.randint(1,100)
        if numero % 2 == 0:
            pares += f"{numero}, "
        else:
            impares += f"{numero}, "
        count +=1
    return f"Pares: {pares}\nImpares: {impares} "

print("********Aleatorios pares impares**********")
print('Introduzca el valor de n: ')
n = int(input())
print(aleatorios(n))