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




       
            return(
                <div>
                { this.props.theUser &&  
                <h1 className="yesLoggedIn" >
                        Welcome {this.props.theUser.firstName} {this.props.theUser.lastName}
                </h1> 
                }



            {!this.props.theUser &&   
                <h1 className="notLoggedIn" >
                    Sorry, no one logged in right now
                </h1>  
            }


                </div>

            )

   
           
        }


    




}



export default User;