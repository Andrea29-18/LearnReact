# Qué es React?
- Una **librería** 
- Es **Declarativa**
- Muy **Eficiente**
- Trabaja de manera **Predecible**
- Se puede romper en **Componentes**
- Se trabaja del laso del _server side_ con Node
- Funcióna para aplicaciones móviles con React Native

## ¿Cómo luce el código de React?
```
const divRoot = document.querySelector('#root');
ReactDom.render(<h1>Hola Mundo</h1>, divRoot);
```
React uriliza algo llamado `JSX = JS + XML` que es el conjunto de JavaScript más XML 

---
# ¿Que es un componente?
Es una pequeña pieza de código encapsulada re-utilizable que puede tener estado o no. 
- En los Componentes es de buena practica utilizar Uppercamelcase
- Se pueden minimizar los componente como sea necesario
    - App -> Router -> Screen/Página -> Menú -> MenuItem

Los compoenentes tiene un **estado** es aquel cambio inicial que tiene el componente, con la interacción del usuario

---
# Explicación de los archivos de counter-appr
- Si tiene un archivo .json significa que se instalo de por los comando de `npm`
- Los archivos del .gitignore son archivos que no queremos que se suban a producción 
- El modulo de _node-modules_ son todas las dependencias de desarrollo para manejar el proyecto
- En la carpeta de public/index.html es el archivo que empieza a ejecutar toda la aplicación de React, es el punto de entrada
- El archivo de [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=es&visit_id=638697530195004051-2957782529&rd=1) son para los boots de google

- En el archivo de src/App.css son todos los estilos globales que puede tener la aplicación de React y esta en capsulado, en cambio el index.css es más generico
- El archivo src/index.js es el archivo principal de la aplicación de React
