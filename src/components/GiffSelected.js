import React, {Component} from 'react';

class GiffSelected extends Component{

  render(){

    return (
      <div className="giffSelected">
        <div className="card">
          <p 
            className="backBtn"
            onClick={()=> this.props.goBack()}>Go back</p>
          <img className="card-img-top" 
          src={this.props.giff[0].image_url} alt="samp" />
          <div className="card-body">
            <table className='table'>
                <tbody>
                  <tr>
                    <td>Title:</td>
                    <td>{this.props.giff[0].title}</td>
                  </tr>
                  <tr>
                    <td>Date Created:</td>
                    <td>{this.props.giff[0].created}</td>
                  </tr>
                  <tr>
                    <td>Uploaded at:</td>
                    <td>{this.props.giff[0].uploaded}</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>

  )}
}

export default GiffSelected
