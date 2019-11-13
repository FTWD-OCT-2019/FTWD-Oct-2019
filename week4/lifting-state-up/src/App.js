import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Navbar from './navbar/navbar';
import { thisExpression } from '@babel/types';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: null,
      newPassword: "",
      newUsername: "",
      formShowing: false,
    }
  }

  showForm = () =>{
    this.setState({formShowing: true})
  }

 

  logMeIn = (e,theUsername, thePassword) =>{
    e.preventDefault();

    console.log(theUsername, thePassword)
    let theUser = {username: theUsername, password: thePassword}
    this.setState({
     user: theUser,
     formShowing: false,
    })
  }



  render(){
        return (
          <div>
            <Navbar currentlyLoggedIn = {this.state.user} showTheForm = {this.showForm} />


            {
              this.state.formShowing &&
              <Login theLoginFunction = {this.logMeIn} />
            }






          </div>
      );
  }
}

export default App;
