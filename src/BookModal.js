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

		let bookSelected = this.props.bookClick
		let imageObj = bookSelected.imageLinks
		let thumbnail = ''
		if(typeof imageObj === 'undefined'){
			thumbnail = ''
		} else {
			thumbnail = imageObj.thumbnail
		}

		return (			
			<div className="book-modal" style={{display: `${this.props.display}`}}>
				<h2>{bookSelected.title}</h2>
				<p>{bookSelected.subtitle}</p>
				<div className="row">
					<div className="left-column">
						<div className="book-cover" style={{width: 128, height:192, backgroundImage: `url(${thumbnail})` }}></div>
					</div>
					<div className="right-column">
						<p>Author(s): {this.authorCompile()}</p>
						<p></p>
					</div>
				</div>
			</div>
		)
	}
}

export default BookModal