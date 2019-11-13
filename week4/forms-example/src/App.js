import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: null,
      newPassword: "",
      newUsername: "",
    }
  }

  showUser = () =>{
    if(this.state.user){
    return(<h1> Welcome, {this.state.user.username}</h1>)
    } else {
      return(
        <h3>No one currently logged in</h3>
      )
    }

  }

  logMeIn = (e) =>{
    e.preventDefault(); 

    this.setState({
      user: {
        username: this.state.newUsername,
        password: this.state.newPassword,
      }
    })
  }



  updateInput = (e) =>{

    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{
      console.log(this.state)
    })

// doing this weird anonymous functin thing will make the console log wait for th set stat to happen
// if you dont do this the console log will always be one behind the state
  }


  render(){

    

        return (
          <div>
            {this.showUser()}


            <form onSubmit = {this.logMeIn}>
              <h3>Log In</h3>

              <p>Username</p>
              <input type="text" value={this.state.newUsername} name="newUsername" onChange = {this.updateInput} />


              <p>Password</p>
              <input type="text" value={this.state.newPassword} name="newPassword" onChange = {this.updateInput}/>


              <button>Log In</button>


            </form>




          </div>
      );
  }
}

export default App;
