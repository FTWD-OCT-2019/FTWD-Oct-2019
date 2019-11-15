import React from 'react';
import './App.css';

import axios from 'axios';

class App extends React.Component {

  state = {
      theCountry: null,
      ready: false,
  }


  componentDidMount(){
    // we do not call this function
    // it calls itself when the time is right
    console.log('this is component did mount')
    // this funciton will run when this component that we are in right now
    // was previously not on the page, and then something happens so that it is on the page
    // sicne this is app component, this will run when we refresh or when the user first visits the page
    axios.get('https://restcountries.eu/rest/v2/name/france')
    .then((theResult)=>{

      let x = theResult.data[0];
      this.setState({theCountry: x, ready: true})

    })
    .catch((err)=>{
      console.log(err);
    })
  }

  render(){
    console.log('look how often render runs')


let place = this.state.theCountry;
if(this.state.ready)
        return (
          <div>
      <h1>{place.name}</h1>

        <h3>Population: {place.population}</h3>

      <h4>Language: {place.languages[0].name}</h4>


          </div>
      )
      else
      return(<h1> loading...</h1>)
    }
}

export default App;
