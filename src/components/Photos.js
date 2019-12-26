import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'

class Photos extends Component{


  render(){
    let photos = this.props.photos.map((p, i) => {
      return ( <div 
                className="col-md-3 eachRow"
                key={i}>
                  <Fade>
                    <img src={p.photo.display_photo} 
                      className="image-pex" 
                      alt="img"
                      onClick={()=>this.props.selPhoto(p)} />
                  </Fade>
              </div> )  
    })

    return(
      <div className="row">
        {/* <Fade top cascade> */}
            {photos}          
        {/* </Fade> */}
      </div>
    )
  }
}

export default Photos