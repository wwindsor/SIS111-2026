def calculadora(num1, num2, operador):
    if(operador=='+'):
        return num1+num2
    if(operador=='-'):
        return num1-num2
    if(operador=='*'):
        return num1*num2
    if(operador=='/'):
        if(num2!=0):
            return num1/num2
        else: return f'no se puede dividir entre {num2}'
    else: return 'Error'

print("********CALCULADORA**********")
print('Introduzca el primer numero: ')
num1 = float(input())
print('Introduzca el operador (+,-,/,*): ')
operador = input()
print('Introduzca el segundo numero: ')
num2 = float(input())
cadena = f"El resultado es: {calculadora(num1,num2,operador)}"
print(cadena)