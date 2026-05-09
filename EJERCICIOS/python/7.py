"""
Una persona que va de compras a la multitienda "CyberSTORE" decide llevar 
un control sobre lo que va comprando, para saber la cantidad de dinero 
que tendrá que pagar al llegar a la caja
La tienda solamente vende 3 tipos de productos, estos pueden ser 
Televisores (codigo 1), Refrigeradores (codigo 2), Lavadoras (codigo 3)
No se puede ingresar el codigo de otro articulo, por lo que solo esos 3
valores pueden ser ingresados (validacion)
La persona tiene que ir 3 veces a la tienda...

Ud. debe realizar un Algoritmo que permita, en cada vez que visite la tienda se:
    > Indicar el codigo
    > Ingresar la cantidad
    > Ingresar el precio unitario

Finalmente, el algoritmo debe dar como respuesta lo siguiente:

Se compraron X televisores, a un total de XXXXX
Se compraron Y refrigeradores, a un total de XXXXX
Se compraron Z lavadoras, a un total de XXXXX
"""

def validar(x):
    if(x==1): return True
    elif(x==2): return True
    elif(x==3): return True
    else: return False

def ingresarDatos():
    print('Seleccione su producto...')
    print('Televisores (codigo 1), Refrigeradores (codigo 2), Lavadoras (codigo 3)')
    productos = []
    for _ in range(3):
        print(f"Ingresar codigo")
        codigo = int(input())
        if(validar(codigo)):
            print(f"Ingresar la cantidad")
            cantidad = int(input())
            print(f"Ingresar el valor")
            valor = float(input())
        else: print("error") 
        producto = {"codigo": codigo, "cantidad":cantidad,"valor":valor}
        productos.append(producto)
    return productos

def calculo1():
    productos = ingresarDatos() 
    cantidad1=0
    cantidad2=0
    cantidad3=0
    valor1=0
    valor2=0
    valor3=0
    for producto in productos:
        if(producto["codigo"]==1):
            cantidad1+=producto["cantidad"]
            valor1+=(producto["valor"]*producto["cantidad"])
        if(producto["codigo"]==2):
            cantidad2+=producto["cantidad"]
            valor2+=(producto["valor"]*producto["cantidad"]) 
        if(producto["codigo"]==3):
            cantidad3+=producto["cantidad"]
            valor3+=(producto["valor"]*producto["cantidad"])
    print(f"Se compraron {cantidad1} televisores, a un total de {valor1}")
    print(f"Se compraron {cantidad2} refrigeradores, a un total de {valor2}")
    print(f"Se compraron {cantidad3} lavadoras, a un total de {valor3}")

calculo1()