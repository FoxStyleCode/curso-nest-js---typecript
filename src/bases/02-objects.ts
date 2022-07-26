
export const pokemonsIds = [10, 20, 1, 6, 19, 2, 21];


interface Pokemon {
    id  : number;
    name: string;
    age : number;
}

export const pokemon: Pokemon = {
    id  : 1,
    name: 'Balbasaur',
    age : 2
}

export const charmander: Pokemon = {
    id  : 2,
    name: 'Charmander',
    age : 1 
}

export const pokemons: Pokemon [] = [];

pokemons.push(pokemon, charmander);

console.log(pokemons);