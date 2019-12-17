import React from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/login';
import Books from './components/books';
import BookDetails from './components/bookdetails';

import {Route, Link} from 'react-router-dom'


class App extends React.Component {

    state = {
      books: [],
      authors: [],
      currentlyLoggedInUser: null,
      loginShowing: false,
      ready: false,
    }

    setFeedbackMessage = (arg, itIsSuccess)=>{
      if(itIsSuccess){
        this.setState({message: arg})
      } else{
        this.setState({error: arg})
      }

      setTimeout(() => {

        this.setState({error: null, message: null})
        
      }, 5500);
    }



    fetchAllData =  async () =>{
      try{ 
        let authors = await axios.get('http://localhost:5000/api/all-authors');
        let books = await axios.get('http://localhost:5000/api/books');
        let currentUser = await axios.get('http://localhost:5000/api/get-user-info', {withCredentials: true} )
        this.setState({
          authors: authors.data,
          books: books.data,
          currentlyLoggedInUser: currentUser.data,
          ready: true,
         })
      }
      catch(err){
        console.log(err);
      }
    }

    componentDidMount(){
      console.log('component did mount')
      this.fetchAllData();
    }

    login = (usrnm, psswrd) => {
      axios.post('http://localhost:5000/api/login', {username: usrnm, password: psswrd}, {withCredentials: true})
      .then((response)=>{
        let user = response.data;
        this.setState({currentlyLoggedInUser: user})

      })
      .catch((err)=>{
        console.log(err);
        this.setState({currentlyLoggedInUser: null})
      })


    }

    toggleLogin = () =>{
      this.setState({loginShowing: !this.state.loginShowing})
    }



  render(){
    console.log('render function')
    console.log(this.state)
      return (
        <div>
          <button onClick={this.setMessage}>click</button>
          { this.state.message &&
            <div className="successBox">Message: {this.state.message}</div>
          }
            
          { this.state.error &&
            <div className="errorBox">Error: {this.state.error}</div>
          }

          <div>
            <Link to="/">Home</Link>

            <button onClick={this.toggleLogin}>Login</button>
          </div>

          {this.state.loginShowing &&
              <Login login={this.login} />
          }
        
        <Route exact path='/' render={(props) => <Books
         {...props} 
         setFlashMessage = {this.setFeedbackMessage}
         books={this.state.books} 
         ready={this.state.ready}
         user = {this.state.currentlyLoggedInUser}
         authors = {this.state.authors}
         updateAll = {this.fetchAllData}
         />}/>

        <Route exact path='/books/:id' render={(props) => <BookDetails 
        {...props} 
        books={this.state.books} 
        ready={this.state.ready}
        updateAll = {this.fetchAllData}
        />}/>



          


      
        </div>
    );
  }
}

export default App;
