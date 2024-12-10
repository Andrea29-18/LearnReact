//Variables y Constantes

const nombre = 'Fernando';
const apellido = 'Herrera';

// Se utiliza LET cuando se sabe que el valor puede cambiar
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado); // Fernando Herrera 4

// Este ejemplo es una variable de "Scope"
if (true) {
    const nombre = 'Peter';
    let valorDado = 6;
    console.log(valorDado); // 6
    console.log(nombre); // Peter
}

console.log(valorDado); //4 

// Ya no se utiliza VAR para declarar variables