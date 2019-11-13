import React from 'react';



function Navbar(props){

    return(
        <div className="the-nav">

            <a>About Us</a>
            <a>Check Out Our Partners on the Web</a>

            {
                !props.currentlyLoggedIn &&
                <button onClick = {props.showTheForm}>Login</button>
            }

            {
                props.currentlyLoggedIn &&
                <button>Logout, {props.currentlyLoggedIn.username}</button>
            }


          
        </div>
    )





}

export default Navbar;