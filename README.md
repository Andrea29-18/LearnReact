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
