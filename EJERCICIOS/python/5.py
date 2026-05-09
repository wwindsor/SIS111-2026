#Escribir un algoritmo que dado un valor en Bolivianos x
#realizar la conversion a dolares y euros
#ademas debe introducir el tipo de cambio de las divisa
def tipo_cambio():
    print("Ingrese el tipo de cambio de $us")
    dolar = float(input())
    print("Ingrese el tipo de cambio de Euro")
    euro = float(input())
    return (dolar,euro)

def conversion():
    (dolar,euro) =tipo_cambio()
    print("Ingrese los Bolivianos")
    bolivianos = float(input())
    cambio_dolar = bolivianos/dolar
    cambio_euro = bolivianos/euro
    return (cambio_dolar,cambio_euro)
 
def mostrar():
    (dolares,euros) = conversion()
    print(f"Tienes actualmente {dolares} dolares")
    print(f"Tienes actualmente {euros} euros")

mostrar()
