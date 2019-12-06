import React from 'react';
import AuthorDetails from './authordetails';
import axios from 'axios';


export default class BookDetails extends React.Component{

    state={
        authorShowing: false,
        editingTitle: false,
        currentTitle: "",
    }

    toggleAuthor = () =>{
        this.setState({authorShowing: !this.state.authorShowing})
    }

    toggleEditTitle = (e, theTitle) =>{
        this.setState({editingTitle: !this.state.editingTitle,
            currentTitle: theTitle
        })
    }

    updateInput = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    editTheBook = (e, bookID) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/books/update', {
            theID: bookID,
            title: this.state.currentTitle
        }, {withCredentials: true})
        .then((response)=>{
            console.log('yay')
            this.props.updateAll();
        })
        .catch((err)=>{
            console.log(err);
        })


    }


    render(){
        let theID = this.props.match.params.id;
        let theActualBook = this.props.books.find((thisBook)=>{
            return thisBook._id == theID
        })



    if(!this.props.ready)
    return(<div>loading....</div>)
    else
    return(
        <div>
            {!this.state.editingTitle &&
            <h4>{theActualBook.title} <button
            onClick={this.toggleEditTitle}>Edit</button></h4>
            }
            
            {this.state.editingTitle &&
                <form onSubmit={(e)=>{this.editTheBook(e, theActualBook._id)}}>
                <h4>
                <p>Old title: {theActualBook.title}</p>
                </h4>

                new title: <input 
                style={{width: '400px'}} 
                type="text" 
                value={this.state.currentTitle}
                onChange = {this.updateInput}
                name="currentTitle"
                />
             <button
            onClick={(e)=>{this.toggleEditTitle(e, theActualBook.title)}}>
                Cancel</button>
                <button>Submit</button>
            </form>
            }

            <h6>
                by: {theActualBook.author.name} 
            <button onClick={this.toggleAuthor}>+</button>
            </h6>

            <img style={{width: '300px'}} src={theActualBook.image} />



                {this.state.authorShowing &&
            <div style={{float: 'right'}}>
                <AuthorDetails author={theActualBook.author} />
            </div>
                }




        </div>


        )
    }
}