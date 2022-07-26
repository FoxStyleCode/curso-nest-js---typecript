import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';

import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';


export class Pokemon {

    get imageUrl(): string{
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    constructor(
        public id  : number,
        public name: string,
        private readonly http: HttpAdapter
        //todo: inyectar dependencias
    ){}

    scream(){
        console.log(`${ this.name.toUpperCase() } !!!`);
    }

    speak(){
        console.log(`${ this.name }, ${ this.name }`)
    }


    async getMoves(): Promise<Move[]>{
        
        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        
        console.log(data.moves);

        return data.moves;

    }

}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const pokemon = new Pokemon(4, 'Charmander', pokeApiAxios);

pokemon.getMoves();