import React from 'react';
import './oneSinglePokemon.css'


// we're making this component a functional component because it does not require a state to function correctly
// if we need to add a state later for any reason, we will have to turn it into a class component
// the way you know if you need a state is basically start building it and see if you can do it without a state
// this one will not need a state because it siply shows the info of 1 single pokemon which we will recieve through props


export default function OneSinglePokemon(props){

    return(
        <div className="card">

            <h4>{props.thePokemon.name}</h4>
            <h6>No. {props.thePokemon.number}</h6>

            <img src={props.thePokemon.image} />
            
         
        </div>
    )




}

