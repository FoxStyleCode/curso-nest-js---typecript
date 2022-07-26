

export let name: string | number = 'Esteban';

export const age : number = 25;

export const isValid: boolean = true;

name = "Melissa";

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores: ${ name }
numeros: ${ age }
booleanos: ${ isValid }`;


console.log(templateString);