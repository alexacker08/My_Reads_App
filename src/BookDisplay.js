import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

//Displays the individual book along with its Select componenet
class BookDisplay extends Component {

	render(){

		//Work around for dealing with initially undefined value on modalUpdate
		let modalStart = typeof this.props.modalUpdate !== 'undefined' ? this.props.modalUpdate : () => {}
		return (
          <ol className="books-grid">
            {this.props.list.map((book) => {
            return <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                  	//Opens the modal on the particular book
                  	onClick={() => modalStart(book)}
                  	style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <SelectArea status={book.shelf} update={this.props.update} book={book} />
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
            </li>
            })
            }
          </ol>
		)
	}
}

//Select component that handles shelf updates.
class SelectArea extends Component {
	constructor(props){
		super(props);
		this.state = {shelfValue: this.props.status}
		this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState({shelfValue: e.target.value})
		this.props.update(this.props.book, e.target.value)
	}

	render(){
		return (
	        <select value={this.state.shelfValue} onChange={this.handleChange}>
	          <option value="none" disabled>Move to...</option>
	          <option value="currentlyReading">Currently Reading</option>
	          <option value="wantToRead">Want to Read</option>
	          <option value="read">Read</option>
	          <option value="none">None</option>
	        </select>
		)
	}
}

export default BookDisplay