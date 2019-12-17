import React from 'react';
import {Link} from 'react-router-dom'
import AddNewBook from './addnewbook';



export default function Books(props){

   const showBooks = () =>{
       const theStyle={width: '200px',
        whiteSpace: 'nowrap',
         overflow: 'scroll',
         textOverflow: 'ellipsis'
        }
        return props.books.map((eachBook)=>{
            return(

                <h3 style={theStyle} key={eachBook._id}>
                <Link to={'/books/'+eachBook._id}>{eachBook.title}</Link>
                </h3>

                )
        })
    }

    return(
        <div>

            <div style={{float: 'left'}}>
            <h3>Books Currently In Library</h3>
            {showBooks()}
            </div>

            <div style={{float: 'right'}}>

                {props.user &&
                <AddNewBook 
                setFlashMessage = {props.setFlashMessage}
                authors={props.authors}
                updateAll = {props.updateAll} 
                />
                }

            </div>



        </div>
    )

}