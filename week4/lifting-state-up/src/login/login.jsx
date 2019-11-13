import React from 'react';



class Login extends React.Component{

constructor(props){
    super(props);
    this.state = {
        userNameInput: "", 
        passwordInput: "",
    }
}


updateInput = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

render(){

    return(

    <form onSubmit = {(e)=>{this.props.theLoginFunction(e, this.state.userNameInput, this.state.passwordInput )}}>
    <h3>Log In</h3>

    <p>Username</p>
    <input type="text" value={this.state.userNameInput} name="userNameInput" onChange = {this.updateInput} />


    <p>Password</p>
    <input type="text" value={this.state.passwordInput} name="passwordInput" onChange = {this.updateInput}/>


    <button>Log In</button>


  </form>
    )
}


}

export default Login;