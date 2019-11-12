import React from 'react';

import listOfAnimals from '../../bunchaAnimals.json';



class Animals extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            list: listOfAnimals,
        }
    }

    showAnimals = () =>{
        return this.state.list.map((eachAnimal, i)=>{
            return(
                <h3 key={i}> {eachAnimal.name} </h3>
            )
        })
    }





    render(){
       

        return(
            <div>

                <h3>Animals component</h3>

                {this.showAnimals()}

            </div>
        )
    }






}

export default Animals;