import React from 'react';
import axios from 'axios';

export default class AddNewBook extends React.Component{


    state={
        newTitle: "",
        newAuthor: null,
        newImage: "",
    }

    showAuthors=()=>{
        return this.props.authors.map((eachAuthor, i)=>{
            return(
            <option key={eachAuthor._id}
             value={eachAuthor._id}>
                 {eachAuthor.name}
            </option>
            )
        })
    }


    updateInput = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    donateBook = (e)=>{
        e.preventDefault();

        axios.post('http://localhost:5000/api/create-the-book', {
            theNewBookTitle: this.state.newTitle,
            theAuthorForNewBook: this.state.newAuthor,
            img: this.state.newImage
        }, {
            withCredentials: true
        })
        .then((response)=>{
            this.setState({
                newTitle: "",
                newAuthor: null,
                newImage: "",
            })
            this.props.updateAll()
        })
        .catch((err)=>{
            console.log(err);
        })

    }


    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.donateBook}>
            <h3>Done A Book To The Library</h3>
            
            <p>Title</p>
            <input type="text"
            name="newTitle"
            value={this.state.newTitle}
            onChange={this.updateInput} />

            <p>Image</p>
            <input type="text"
            name="newImage"
            value={this.state.newImage}
            onChange={this.updateInput}
            />

            <p>Author</p>
            <select required={true} name="newAuthor" onChange={this.updateInput}>
                <option >Please Select An Author</option>
                {this.showAuthors()}
            </select>

            <p></p>
            <button>Submit</button>

                </form>
                
            </div>

        )
    }


}