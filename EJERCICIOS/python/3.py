#Escribir un algoritmo que calcule el area de un triangulo
def area(base, altura):
    return (base*altura)/2

print("Ingrese la base del tringulo")
b = float(input())
print("Ingrese la altura del tringulo")
a = float(input())
print(area(b,a))