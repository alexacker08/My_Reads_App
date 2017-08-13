import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  
  constructor(){
    super();
    this.state = {books: []}
    this.updateBookStatus.bind(this)
  }  

  render() {
    return (
      <div className="app">        
        <Route exact path="/search" render={() => (
          <SearchBooks add={(book,shelf) => {
            this.updateBookStatus(book,shelf) 
          }} currentBooks={this.state.books}/>
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
