import React, {Component} from 'react'

class Filter extends Component {

	//Handles all click events within the filter elements
	filterButtonClick = (evt) => {
		const filterBtn = evt.target;
		const filterTag = filterBtn.tagName;

		//Unleashes the filtering option once a user clicks on the FILTER P element
		if(filterTag === 'P'){
		  filterBtn.parentNode.children[1].classList.toggle('active');
		}
		//Handles the actual filtering once a user clicks on one of the filter options
		if(filterTag === 'LI'){
		  const filterOptions = filterBtn.parentNode.children;
		  const shelfStatus = filterBtn.dataset.status;
		  const getShelves = document.getElementsByClassName('bookshelf');

		  //Updates the styling of the filter element clicked on
		  for(let i = 0; i < filterOptions.length; i++){
		    filterOptions[i].classList.remove('active');
		  }
		  filterBtn.classList.add('active');

		  //Hides and shows different bookshelves based on the filter selection
		  //This could have been done by updating the APP state however I felt a re-render of the DOM was not needed in this instance
		  if(shelfStatus !== 'all'){
		    for(let x = 0; x < getShelves.length; x++){
		      if(getShelves[x].dataset.shelf !== shelfStatus){
		        getShelves[x].style.display = 'none';
		      } else {
		        getShelves[x].style.display = 'block';
		      }
		    }
		  } else {
		    for(let x = 0; x < getShelves.length; x++){
		      getShelves[x].style.display = 'block';
		    }
		  }
		}
	}

	render(){
		return (
          <div className="options-row">
            <ul>
              <li className="filter" onClick={(evt) => this.filterButtonClick(evt)}>
                <p>Filter</p>
                <ul>
                  <li className="active" data-status="all">All Books</li>
                  <li data-status="currentlyReading">Currently Reading</li>
                  <li data-status="wantToRead">Want to Read</li>
                  <li data-status="read">Have Read</li>
                </ul>
              </li>
            </ul>
          </div>
		)
	}
}

export default Filter


