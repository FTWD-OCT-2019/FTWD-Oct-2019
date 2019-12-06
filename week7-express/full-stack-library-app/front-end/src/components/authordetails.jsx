import React from 'react';


export default function AuthorDetails(props){



    return(
        <div>
            <h2>
            {props.author.name}
            </h2>

            <h6>Born {props.author.birthdate} in {props.author.hometown}</h6>

            <img src={props.author.image} style={{width: '300px'}} />

    

        </div>

    )
}