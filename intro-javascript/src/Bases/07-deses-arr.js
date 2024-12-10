const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes [0]); // Goku
console.log(personajes [1]); // Vegeta
console.log(personajes [2]); // Trunks

console.log("----"); 

const [p1] = personajes;
console.log(p1); // Goku

const [, p2] = personajes;
console.log(p2); // Vegeta

const [, , p3] = personajes;
console.log(p3); // Trunks

console.log("----");

const retornaArreglo = () => { 
    return ['ABC', 123];
}

//SIN DESESTRUCTURAR
const arr = retornaArreglo();
console.log(arr);

//CON DESESTRUCTURAR
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

console.log("----");

//TAREA
//1. El primer valor del arr se llamará nombre
//2. Se llamará setNombre
const estado = (valor) => {
    return [valor, () => { 
        console.log('Hola Mundo') 
    }];
}

const [nombre, setNombre] = estado('Goku');
console.log(nombre);

setNombre(); //Hola Mundo