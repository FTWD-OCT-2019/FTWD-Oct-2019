import React from 'react';
import './App.css';
import User from './components/user-component/user';

import Animals from './components/animals/animals';

class App extends React.Component {
  // we just created a new html tag called <App>

  constructor(props){
    super(props);
    this.state = {
      user: null,
    }

  }



   logMeIn = () => {
     console.log('user is', this.user)
     console.log('logging in');

     this.setState({
       user: {firstName: 'nick', lastName: 'borbe'},
     })

   }

   logMeOut = () =>{

    this.setState({
      user: null,
    })
   }

   



    render(){
      console.log('render is running')

          return (
            <div>

              <button id="grad1"> Rave Time!</button>

              <div className="ravebox" style={this.state.raveBoxStyle}>

                Rave
              </div>

              <button onClick = {this.logMeIn}>Login</button>
              <button onClick = {this.logMeOut}>Logout</button>



              <User theUser = {this.state.user} />
              

              <Animals />



            </div>
            );
      }
  
}







export default App;
