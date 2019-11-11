import './user.css';
import React from 'react';


class User extends React.Component{

    
    render(){
        let blah = {};
        if(this.props.theUser){
            blah.border = '4px solid green';
            blah.borderRadius = '4px';
            blah.fontSize = '24px';
        } else {
            blah.border = '4px solid red';
            blah.fontSize = '20px';
        }




        if(this.props.theUser){
            return(
    
        <h1 className="yesLoggedIn" >Welcome {this.props.theUser.firstName} {this.props.theUser.lastName}</h1>
            )

        } else {
            return(
                <h3 className='notLoggedIn'>No one currently logged in</h3>
            )
        }


    }




}



export default User;