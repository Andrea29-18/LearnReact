import  heroes, {owners} from '../Data/heroes';

//Leer README.md para entender el ejercicio Array.find
export const getHeroById = (id) => heroes.find(hero => hero.id === id);

console.log(getHeroById(2));


//El find solo devuelve el primer elemento que cumple la condición
export const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHeroByOwner('DC'));

//PARTE02

console.log('---------------------------------');

console.log(owners);