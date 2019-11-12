import React from 'react';

import bunchaPokemon from '../../pokemon.json'

import OneSinglePokemon from '../oneSinglePokemon/oneSinglePokemon';



class PokemonList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            pokemon: bunchaPokemon
        }
    }

    showPokemon = () =>{
        return this.state.pokemon.map((eachPokemon,i)=>{
            return(
            <OneSinglePokemon
             key={i}
             thePokemon = {eachPokemon}
              />
            )
        })
    }


render(){

    console.log(this.state)

    return(
        <div>
            {this.showPokemon()}
        </div>
    )
}



}

export default PokemonList;