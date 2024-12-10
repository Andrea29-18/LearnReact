// Asignación de Desestructurante 
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// SIN DESESTRUCTURAR
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//CON DESESTRUCTURAR
const {clave, nombre, edad} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

//SIN DESESTRUCTURAR
const retornaPersona = ({usuario}) => {
    console.log(usuario);
}

retornaPersona(persona);

//CON DESESTRUCTURAR
const retornaPersona2 = ({clave, nombre, edad}) => {
    console.log(nombre, edad, clave);
}
retornaPersona2(persona);

