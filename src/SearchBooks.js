import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookDisplay from './BookDisplay'
import * as BooksAPI from './BooksAPI'
import debounce from 'debounce'


class SearchBooks extends Component {

	constructor(props){
		super(props);
	    this.state = {query: []}
	    this.queryChange.bind(this)
	    this.handleChange.bind(this)
	}

	//Implementing Query change functionality with Debounce to minimize the API calls
	queryChange = debounce((searchTerm) => {
	BooksAPI.search(searchTerm, 100).then((books) => {        
	  
	  const bookList = new Set(books);
	  console.log(bookList);

	  //Map out new search results based on the state of the 
	  const newBook = books.map((obj) => {
	    let currentBook = this.props.currentBooks.filter((currBook) => currBook.id === obj.id)
	    let updatedObj = obj;
	    if(currentBook.length > 0){
	      updatedObj.shelf = currentBook[0].shelf;            
	    } else {
	      //Setting the Book to none if a selection hasn't been made yet
	      updatedObj.shelf = 'none';
	    }
	    return updatedObj
	  });
	  this.setState({query: newBook})
	})      
	}, 500)

	//Passing updating book status to select children
	handleChange = (book,bookStatus) => {
	this.props.add(book,bookStatus)
	}	

	render(){
		return (
	      <div className="search-books">
	        <div className="search-books-bar">              
	          <Link to="/" className="close-search">Close</Link>
	          <div className="search-books-input-wrapper">
	            <input type="text" placeholder="Search by title or author"
	              onChange={(e) => this.queryChange(e.target.value)}
	            />                
	          </div>
	        </div>
	        <div className="search-books-results">
	          {this.state.query.length > 0 && (
	            <BookDisplay list={this.state.query} update={this.handleChange} />
	          )}
	        </div>
	      </div>			
		)
	}	
}