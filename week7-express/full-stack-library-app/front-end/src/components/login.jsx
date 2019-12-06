import React from 'react';


export default class Login extends React.Component{

    state = {
        usernameInput: "",
        passwordInput: ""
    }


    passLoginInfoToAppComponent = (e) =>{
        e.preventDefault();
        this.props.login(this.state.usernameInput, this.state.passwordInput)
    }

    updateInput = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }




    render(){
        return(
            <div>
                <form onSubmit={this.passLoginInfoToAppComponent}>
                    <p>Username</p>
                    <input type="text"
                     value={this.state.usernameInput}
                     name="usernameInput"
                     onChange={this.updateInput}

                     />

                    <p>Password</p>
                    <input type="text"
                     value={this.state.passwordInput}
                     name="passwordInput"
                     onChange={this.updateInput}
                     />

                    <button>Submit</button>

                </form>
                
            </div>
        )
    }


}