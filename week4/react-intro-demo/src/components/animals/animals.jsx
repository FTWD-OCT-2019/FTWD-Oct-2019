import React from 'react';

import listOfAnimals from '../../bunchaAnimals.json';
import './animals.css'



class Animals extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            list: listOfAnimals.slice(0,7),
            otherAnimals: [
                {"name": "kimodo dragon", "weight": 70},
                {"name": "alligator", "weight": 300},
                {"name": "gecko", "weight": 0},
                {"name": "gorilla", "weight": 300},
                {"name": "elephant", "weight": 10000}
            ]

        }
    }

    showAnimals = () =>{
        return this.state.list.map((eachAnimal, i)=>{
            return(
                <div key={i}>
                 
                        <h3 className="eachAnimal">
                            <span>
                        {eachAnimal.name}
                            </span>

                            <span onClick = {()=>{this.deleteAnimal(i)}}>
                                    X    
                            </span>
                        </h3>
                
                      
                      
                      </div>
            )
        })
    }

    deleteAnimal = (theIndex) =>{
        let clone = [...this.state.list];
        // step 1 is to grab theinfo out of the state and clone it

        clone.splice(theIndex, 1);
        // step 2 is to do wahtever you want to do to that thing and you can do it in regular javascript

        this.setState({list: clone})
        // step 3 is to take that thing you edited and use it to set the state
    }

    addRandom = () =>{
        let othersClone = [...this.state.otherAnimals];

        let rand = othersClone.splice(Math.floor(Math.random()*othersClone.length), 1)[0]
        
        console.log(rand)


        let clone = [...this.state.list];

        if(rand)
        clone.unshift(rand);

        this.setState({list: clone, otherAnimals: othersClone})
    }





    render(){
       

        return(
            <div>

                <h3>Animals component</h3>

                <button
                onClick = {this.addRandom}
                >Add Another Rando</button>

                {this.showAnimals()}

            </div>
        )
    }






}

export default Animals;