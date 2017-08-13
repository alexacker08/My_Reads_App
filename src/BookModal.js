import React, {Component} from 'react'

class BookModal extends Component {
	
	authorCompile = () => {
		const authorList = this.props.bookClick.authors
		if(Array.isArray(authorList)){
			if(authorList.length > 1){
				return authorList.join(', ')
			} else {
				return authorList[0]
			}
		} else {
			return 'Unknown'
		}
	} 

	render(){
		
		//Errors prduced with undefined variable thus workaround to produce empty string during initial DOM loads.
		//There is a better way to implement this 
		let bookSelected = this.props.bookClick
		let imageObj = bookSelected.imageLinks
		let thumbnail = ''
		if(typeof imageObj === 'undefined'){
			thumbnail = ''
		} else {
			thumbnail = imageObj.thumbnail
		}

		return (			
			<div className="book-modal-total">
				<div className="book-modal" style={{display: `${this.props.display}`}}>
					<h2>{bookSelected.title}</h2>
					<p>{bookSelected.subtitle}</p>
					<div className="row">
						<div className="left-column">
							<div className="book-cover" style={{width: 128, height:192, backgroundImage: `url(${thumbnail})` }}></div>
						</div>
						<div className="right-column">
							<p>Author(s): {this.authorCompile()}</p>
							<p># of Pages: {bookSelected.pageCount}</p>
							<p>Publisher: {bookSelected.publisher}</p>
							<p>Date Published: {bookSelected.publishedDate}</p>
							<a href={bookSelected.infoLink} target="_blank">More Information</a>
						</div>
					</div>
					<div className="x-button" onClick={() => this.props.closeModal()}>X</div>
				</div>
				<div className="book-modal-overlay" onClick={() => this.props.closeModal()} style={{display: `${this.props.display}`}}></div>
			</div>
		)
	}
}

export default BookModal