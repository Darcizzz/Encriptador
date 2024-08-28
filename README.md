#  Cifrado y Descifrado Simple con JavaScript
# Descripción
Este código JavaScript implementa un simple algoritmo de cifrado por sustitución utilizando un alfabeto personalizado. El cifrado se basa en desplazar los caracteres del texto original según una clave proporcionada.
#  Funcionalidades
# Alfabeto Personalizado: 
Define un alfabeto que incluye letras mayúsculas y minúsculas, números y algunos símbolos.
# Cifrado: 
La función Encriptar desplaza cada carácter del texto original según su posición en el alfabeto y la posición correspondiente del carácter de la clave.
# Descifrado:
La función Desencriptar realiza la operación inversa del cifrado, desplazando los caracteres en sentido contrario.
Interfaz de Usuario: Proporciona una interfaz sencilla para que sea compatible con cualquier dispositivo con campos para ingresar el texto y la clave, así como botones para encriptar y desencriptar.
Carga Inicial: Al cargar la página, automáticamente se encripta un texto de ejemplo.
# ¿Cómo Funciona?
# Alfabeto:
Se define un string alfabeto que contiene todos los caracteres posibles que se pueden utilizar en el cifrado.
# Cifrado:
Se itera sobre cada carácter del texto a cifrar.
Se obtiene el índice del carácter en el alfabeto y el índice del carácter correspondiente en la clave.
Se calcula el nuevo índice sumando los dos índices anteriores y tomando el módulo de la longitud del alfabeto.
El carácter en el nuevo índice se agrega al texto cifrado.
# Descifrado:
Se realiza un proceso similar al cifrado, pero en lugar de sumar los índices, se restan. Se manejan los casos donde el resultado de la resta es negativo.
Interfaz de Usuario:
Se utilizan los eventos click de los botones para llamar a las funciones de cifrado y descifrado.
El resultado se muestra en un elemento HTML con el id result.
# Limitaciones
Este algoritmo de cifrado es muy simple y no es seguro para proteger información confidencial. Es principalmente un ejemplo educativo. El alfabeto utilizado puede limitarse según las necesidades específicas. La clave debe tener la misma longitud o menor que el texto a cifrar. Si es más corta, se repite cíclicamente.
# Clonar el repositorio: 
Clona el repositorio en tu máquina local.
Abrir el archivo HTML: Abre el archivo HTML en un navegador web.
Ingresar texto y clave: Escribe el texto que deseas cifrar o descifrar y la clave correspondiente en los campos proporcionados.
Hacer clic en el botón: Haz clic en el botón "Encriptar" o "Desencriptar" para ver el resultado.
Nota: Para utilizar este código en un proyecto más grande, puedes encapsular las funciones de cifrado y descifrado en una biblioteca o módulo reutilizable.

Este código es un punto de partida para explorar el mundo del cifrado y la seguridad de la información.
