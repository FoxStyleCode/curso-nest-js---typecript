import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';


export class Pokemon {

    get imageUrl(): string{
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public id  : number,
        public name: string,
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase() } !!!`);
    }

    speak(){
        console.log(`${ this.name }, ${ this.name }`)
    }

    // https://pokeapi.co/api/v2/pokemon/4

    async getMoves(): Promise<Move[]>{
        
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        
        console.log(data.moves);

        return data.moves;

    }

}

export const pokemon = new Pokemon(4, 'Charmander');

// console.log(pokemon);

// pokemon.scream();
// pokemon.speak();

console.log(pokemon.getMoves());