import React, {Component, Fragment} from 'react';
import Fade from 'react-reveal/Fade';

class Book extends Component{


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

  salable(book){
    let n = (
      <Fragment>
        <tr>
          <th scope="row" className="desc_text">Price</th>
          <td className="desc_value">$ {book.price.amount}</td>
        </tr>
        <tr>
          <th scope="row" className="desc_text"></th>
          <td className="desc_value">
            <a href={book.link}
              rel = 'noopener noreferrer'
              target = "_blank">
                <button type="button" className="btn btn-success">
                    Buy this book</button></a>
          </td>
        </tr>
      </Fragment>
    )
    return n
  }

  render(){
    return (
    <Fade>
      <div className="row book_desc">
      {/* column start */}
      <div className="col-md-1"></div>
      <div className="col-md-3">
        <div className="image">
           {!this.props.book.image ? 
                <div className="no_image">
                  <p>Book cover</p>
                </div>  :
                  <img 
                    src={this.props.book.image} 
                    alt={this.props.book.title}
                    className="hover" />
              }
        </div>
      </div>

      <div className="col-md-7 description">
        <h1>Book Description</h1>

        <table className="table">
          <tbody>
            <tr>
              <th scope="row" className="desc_text">Title</th>
              <td className="desc_value">{this.props.book.title}</td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">Author</th>
              <td className="desc_value">{this.props.book.authors}</td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">Categories</th>
              <td className="desc_value">{this.props.book.categories}</td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">Description</th>
              <td className="desc_value">{this.props.book.description}</td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">Ave. Ratings</th>
              <td className="desc_value">
                <div className="star">
                  {this.stars(Math.ceil(this.props.book.ratings))}
                  {/* <i className="fa fa-star fa-xs checked"></i>
                  <i className="fa fa-star fa-xs checked"></i>
                  <i className="fa fa-star fa-xs checked"></i>
                  <i className="fa fa-star fa-xs"></i>
                  <i className="fa fa-star fa-xs"></i> */}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">No. of Ratings</th>
              <td className="desc_value">{this.props.book.totalRatings}</td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">Publisher</th>
              <td className="desc_value">{this.props.book.publisher}</td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">Date of Publication</th>
              <td className="desc_value">{this.props.book.published_date}</td>
            </tr>
            <tr>
              <th scope="row" className="desc_text">Pages</th>
              <td className="desc_value">{this.props.book.pages} p.</td>
            </tr>
            {/* <tr>
              <th scope="row" className="desc_text">ISBN</th>
              <td className="desc_value">{this.props.book.isbn.identifier}</td>
            </tr> */}
            <tr>
              <th scope="row" className="desc_text">Salability</th>
              <td className="desc_value">{this.props.book.salable ? 'Yes' : 'No'}</td>
            </tr>
            { this.props.book.salable ?  this.salable(this.props.book.salable): null}
          </tbody>
        </table>

      </div>
      <div className="col-md-1"></div>
      {/* column ends */}
    </div>
  </Fade>
    )
  }
}

export default Book
 