//Objeto lilteral (Diccionarios)
const persona = {
    nombre: 'Tony', //key: 'value'
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

console.log(persona);

//console.log({persona:persona}); //Esta tiene un objeto {} dentro tiene una propiedad persona

//console.table(persona); //Muestra en forma de tabla

//Para clonar un objeto (No se recomienda)
const persona2 = persona; //No se esta clonando, sino se esta copiando la referencia de persona, o sea el espacio en memoria
persona2.nombre = 'Peter';
console.log('Demostración de que no se esta creando uno nuevo, sino que es el mismo');
console.log(persona);
console.log(persona2);

//Clonar un objeto (Recomendado)
const persona3 = {...persona}; //Se esta clonando el objeto persona en un nuevo espacio de memoria
persona3.nombre = 'Harold';

console.log('Demostración de que se esta creando uno nuevo');
console.log(persona);
console.log(persona3);