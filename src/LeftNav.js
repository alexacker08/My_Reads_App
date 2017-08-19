import React, {Component} from 'react'
import {Link} from 'react-router-dom'

//Left nav component that is utilized across both the search and shelf pages
class LeftNav extends Component {
  render(){
    return (
        <div className="list-books-left-nav">
          <div className="shelf-button">
            <Link to="/" className="btn">List Books</Link>
          </div>
          <div className="shelf-button">
            <Link to="/search" className="btn">Search</Link>
          </div>
        </div>
      )
  }
}

export default LeftNav