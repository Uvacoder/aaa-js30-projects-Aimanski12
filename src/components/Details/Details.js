import React, {Component} from 'react'

class Details extends Component {
  render(){
    return (
      <div className="details">
        <img src={`https://image.tmdb.org/t/p/w200/${this.props.movie.poster}`} alt=""/>
        <h5>Title: 
          <b className='textDetail'>{this.props.movie.title}</b></h5>
        <h5>Rating: 
          <b className='textDetail'>{this.props.movie.rating}</b></h5>
        <h5>Language: 
          <b className='textDetail'>{this.props.movie.lang}</b></h5>
        <h5>Date released: 
          <b className='textDetail'>{this.props.movie.released}</b></h5>
        <h5>Genre: 
          <b className='textDetail'>Action, Drama</b></h5>
        <h5>Overview: 
          <b className='textDetail'>{this.props.movie.overview}</b></h5>
          <button 
            type="button" 
            className="btn btn-outline-primary"
            onClick={()=>this.props.selClick([])}>Go back to searched movies</button>
      </div>
  )}
}
export default Details