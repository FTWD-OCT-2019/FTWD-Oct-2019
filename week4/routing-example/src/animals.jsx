import React from 'react';


function Animals(props){

    let theActualAnimal = props.bunchaAnimals.find((eachAnimal)=>{
        return eachAnimal.id == props.match.params.id;
        // things you get from props/params are always strings
    })

    let doTheRandomThing = () =>{
        console.log('yeah!')
        alert('wow');
        // no point in using this instead of Link unless you want to actually
        // do something before redirecting
        props.history.push('/blah');
        // this is how you redicrect
        // dont fight it just accept it
    }



if(theActualAnimal)
    return(
        <div>

    <h2>{theActualAnimal.name}</h2>

    <h6>Color: {theActualAnimal.color}</h6>

    <p>Weight: {theActualAnimal.weight}</p>


    <button onClick = {doTheRandomThing}>Random Button</button>

        </div>
   
    )
    else
    return(<h1>loading</h1>)
}

export default Animals;