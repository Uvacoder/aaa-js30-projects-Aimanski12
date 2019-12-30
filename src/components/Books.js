import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';


class Books extends Component{

  stars(star){
    let s = []
    for (let x = 0; x < 5; x++){
      if(star <= x) {
        s.push(<i className="fa fa-star fa-xs"></i>)
      } else {
        s.push(<i className="fa fa-star fa-xs checked"></i>)
      }
    }
    return s
  }

  render(){
    let books = {}

    if(this.props.books.length > 0){
      books = this.props.books.map((book, i) => {
        return (
          <div 
            className="col-md-3 ind_Row"
            key={i}>
            <div className="image">
              {!book.image ? 
                <div className="no_image">
                  <p>Book cover</p>
                </div>  :
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="hover"
                    onClick={()=>this.props.selectBook(book)} />
              }
            </div>
            <p 
              className="d_title hover">{book.title}</p>
            <p className="d_author hover">{book.authors}</p>
            <p className="d_publisher">{book.publisher}</p>
            <div className="star">
              {this.stars(Math.ceil(book.ratings))}
            </div>
          </div>  
        )
      })
    } else {
      books = (
        <div className="empty">
          <h1>No books found.</h1>
        </div>
      )
    }

  return (
    <div className="row">
      <Fade>
        {books}
      </Fade>
    </div>
  )};
}

export default Books