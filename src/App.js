import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  
  constructor(){
    super();
    this.state = {
      books: []
    }
    this.updateBookStatus.bind(this)
  }


  //Handles updating books both within the Search and Main shelf page
  updateBookStatus = (book,shelf) => {
    book.shelf = shelf
    BooksAPI.update(book,shelf).then((res) => {
      this.setState((prevState) => ({
        books: prevState.books.filter(b => b.id !== book.id).concat([book])
      }))
    }).catch(e => alert(`${e}. There is an issue with with the API. Please try again.`))
  }

  //Conducts initial API lookup of Books on current active shelf
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books}) 
    }).catch(e => alert(`${e}. There is an issue with with the API. Please try again.`))
  }

  render() {
    return (
      <div className="app">        
        <Route exact path="/search" render={() => (
          <SearchBooks 
            add={(book,shelf) => {
              this.updateBookStatus(book,shelf) 
            }} 
            currentBooks={this.state.books}          
          />
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks 
            books={this.state.books}
            update={this.updateBookStatus}
          />
        )}/>        
      </div>
    )
  }
}

export default BooksApp
