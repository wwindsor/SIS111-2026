def mayormenor(a, b, c):
    mayor=a
    menor=a
    #Para sacar el mayor
    if(a > b and a > c):
        mayor=a
    elif(b > a and b > c):
        mayor=b
    else: 
        mayor=c
    #Para sacar el menor
    if(a < b and a < c):
        menor=a
    elif(b < a and b < c):
        menor=b
    else: 
        menor=c
    return f"Menor: {menor} Mayor: {mayor}"

print("********Mayor Menor**********")
print('Introduzca el valor de a: ')
a = int(input())
print('Introduzca el valor de b: ')
b = int(input())
print('Introduzca el valor de c: ')
c = int(input())
print(mayormenor(a,b,c))