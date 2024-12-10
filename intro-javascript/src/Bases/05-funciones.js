//Crear una funcion NO RECOMENDADA
function saludas (nombre){
    return `Hola ${nombre}`;
}

//saludas = 30;

console.log(saludas('Miguel')); // Hola Miguel


//Crear una funcion RECOMENDADA
const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Miguel')); // Hola Miguel

//Funcion de flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

console.log(saludar2('Miguel')); // Hola Miguel

//Funcion de flecha reducida
const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar3('Miguel')); // Hola Miguel

const saludar4 = () => `Hola Mundo`;

console.log(saludar4()); // Hola Mundo

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
const user = getUser();
console.log(user); 


// TAREA
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Miguel');
console.log(usuarioActivo); 

//1. Transformar a una funcion de flecha
const getUsuarioActivo2 = (nombre) => {
    return {
        uid: 'ABC567',
        username: nombre
    }
};

console.log(getUsuarioActivo2('Miguel'));

//2. Tiene que retornar un objeto implicito
const getUsuarioActivo3 = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

console.log(getUsuarioActivo3('Miguel'));