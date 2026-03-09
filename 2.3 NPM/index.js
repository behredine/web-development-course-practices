// var generateName = require('sillyname');
import generateName from 'sillyname';
var sillyName = generateName();

console.log(`My silly name is ${sillyName}.`);

import superheroes, { randomSuperhero } from 'superheroes';
var mySuperheroName =randomSuperhero();
console.log(`My superhero name is ${mySuperheroName}.`);