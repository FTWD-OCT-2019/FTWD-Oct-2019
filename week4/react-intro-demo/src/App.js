import React from 'react'
import './App.css';
import User from './components/user-component/user';

class App extends React.Component {
  // we just created a new html tag called <App>

  user = {firstName: 'nick', lastName: 'borbe'}



   logMeIn = () => {
     console.log('user is', this.user)
     console.log('logging in');

    this.user = {firstName: 'nick', lastName: 'borbe'}

    console.log('user is', this.user)
   }

   logMeOut = () =>{
     this.user = null;
   }



    render(){
      console.log('render is running')

          return (
            <div>



              <button onClick = {this.logMeIn}>Login</button>

              <User theUser = {this.user} />
              we will always show no one is logged in because render only runs once because we are not using state yet
            </div>
            );
      }
  
}







export default App;
