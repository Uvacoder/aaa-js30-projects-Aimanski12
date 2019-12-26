import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'

class Photo extends Component{




  render(){
    let p = this.props.photo
    console.log(p)
    return (
      <Fade>
        <div className="selectedPhoto">
          <a download='photo.jpeg'
            href={p.photo.display_photo}>
            <img src={p.photo.display_photo} className="image-pex" alt="samp" />
          </a>
          <div className="text">
            <p>Photographer: <b>{p.photographer.name}</b></p>
            <p>Photo Url: <b>click 
                <a 
                  href={p.photo.url}
                  rel='noopener noreferrer'
                  target="_blank"> here</a></b></p>
            <p>
              <b>
                <a 
                  href={p.photo.original_photo}
                  rel='noopener noreferrer'
                  target="_blank">View original photo</a></b></p>
            <div>
              <button 
                type="button" 
                className="btn btn-light"
                onClick={this.props.back}>Go back</button>
            </div>
          </div>
        </div> 
      </Fade>
  )}
}

export default Photo


// <a href="/images/myw3schoolsimage.jpg" download="w3logo">
//   <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" width="104" height="142">
// </a>
