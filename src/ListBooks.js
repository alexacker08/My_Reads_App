import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookDisplay from './BookDisplay'
import BookModal from './BookModal'
import LeftNav from './LeftNav'

class ListBooks extends Component {
	constructor(props){
		super(props)
		this.bookFilter.bind(this)
	}

	//Only allow books in that meet the criteria of that particular shelf.
	bookFilter = (param) => {
		return this.props.books.filter((obj) => {
		  return obj.shelf === param
		})
	}
	render(){
		return (
      <div className="list-books">
        <LeftNav />
        <div className="list-books-content">
          <div>
            <BookShelf
            	list={this.bookFilter('currentlyReading')}
            	update={this.props.update}
            	title={'Currently Reading'}
            />
            <BookShelf
            	list={this.bookFilter('wantToRead')}
            	update={this.props.update}
            	title={'Want to read'}
            />
            <BookShelf
            	list={this.bookFilter('read')}
            	update={this.props.update}
            	title={'Have Read'}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a Book</Link>
        </div>
      </div>
		)
	}
}


//Could implement this as a normal "Function" however like the consistency of utilizing the extends method.
class BookShelf extends Component {
  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BookDisplay list={this.props.list} update={this.props.update} />
        </div>
      </div>
    )
  }
}

export default ListBooks