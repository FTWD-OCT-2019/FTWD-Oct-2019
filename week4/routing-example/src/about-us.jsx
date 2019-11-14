import React from 'react';
import {Link} from 'react-router-dom';


function AboutUs(props){


    
      let showAnimals = () =>{
        return props.bunchaAnimals.map((each)=>{
    
          return(
            <div key={each.id}>
            <Link to={'/animals/'+each.id}>{each.name}</Link>
            </div>
          )
    
        })
      }
    


    return(
        <div>
            This is the about us component

<br />
<br />
<br />
<br />
            
            
    {showAnimals()}
            
            
            </div>
    )
}

export default AboutUs;