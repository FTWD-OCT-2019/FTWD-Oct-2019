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
      raveBoxStyle: {backgroundColor: 'white'},
      raveText: 'Rave',
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

   rave = () =>{
    let lightColors = [
      "#f500d8",
      '#c3ebcd',
      "#a6feff",
      "#ffd6fe",
      "#ffdc82", 
      "#fffcf5", 
      "#e8feff",
      "#abddff",
      "#ff7373",
      "#ff7070",
      "#72ff70",
      "#00f56e",
      "#c400f5",
    ]

    let darkColors = [
      "#78026a",
      "#8c2020",
      "#a8a007",
      "black",
      "#0e8f00",
      "#009c91",
    ]
      let currentStyle = {...this.state.raveBoxStyle};

      let randomLightColor = lightColors[Math.floor(Math.random() *lightColors.length)];
      let randomDarkColor = darkColors[Math.floor(Math.random() *darkColors.length)];

      let otherRandomThing = Math.random();

      if(otherRandomThing > 0.5){
        currentStyle.backgroundColor = randomDarkColor;
        currentStyle.color = randomLightColor;
      } else {
        currentStyle.backgroundColor = randomLightColor;
        currentStyle.color = randomDarkColor;
      }

      let key = {
        "Rave": 'Or',
        "Or": 'Die!',
        "Die!": 'Rave'
      }

      let newWord = key[this.state.raveText];
      
      this.setState({
        raveBoxStyle: currentStyle,
        raveText: newWord
      })
   }

   



    render(){
      console.log('render is running')

          return (
            <div>

              <button id="grad1"
              onClick = {this.rave}
              > Rave Time!</button>

              <div className="ravebox" style={this.state.raveBoxStyle}>
                {this.state.raveText}
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
