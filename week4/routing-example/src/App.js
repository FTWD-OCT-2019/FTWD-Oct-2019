import React from 'react';
import logo from './logo.svg';
import './App.css';

import Blah from './blah';
import AboutUs from './about-us';
import Animals from './animals';

import {Link, Switch, Route} from 'react-router-dom';


function App() {


  let animals = [
    {name: 'dog', color: 'yellow', weight: 100, id: 183},
    {name: 'mouse', color: 'white', weight: 1, id:273 },
    {name: 'rhesus macaque', color: 'brown', weight: 20, id: 987},
    {name: 'rooster', color: 'red', weight: 6, id: 123},
    {name: 'guinea pig', color: 'white', weight: 1, id: 475},
  ]



  return (
    <div>

      <div>
        <Link to="/about">About Us</Link>
        <Link to="/blah">Visit the Blah page</Link>
        <Link to="/">Home</Link>


        <Link to="/animals/haha">Animal</Link>
      </div>



      <Switch>

      <Route exact path="/about" render ={ props => 
      <AboutUs
       {...props}
       bunchaAnimals = {animals}
        /> } />
    


      <Route exact path='/blah' component={Blah}/>


      <Route exact path="/animals/:id" render ={ props => 
      <Animals
       {...props}
       bunchaAnimals = {animals}
        /> } />
      </Switch>





    

    </div>
  );
}

export default App;
