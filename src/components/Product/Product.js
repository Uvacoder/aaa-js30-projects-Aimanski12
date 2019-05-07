import React, { Component, Fragment } from 'react'
import './Product.css'
class Product extends Component {
  render() {
    return (
      <Fragment>
        <div>
        <button 
          onClick={this.props.click ? this.props.click : this.props.view}
          className="btn btn-secondary btn-md btn-block btn-scan-again">{this.props.click ? 'Scan Again' : 'View History' }</button>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Barcode Number</td>
              <td>{this.props.item.barcode_number}</td>
            </tr>
            <tr>
              <td>Barcode Type</td>
              <td>{this.props.item.barcode_type}</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>{this.props.item.product_name}</td>
            </tr>
            <tr>
              <td>Product Image</td>
              <td><img src={this.props.item.product_image} /></td>
            </tr>
            <tr>
              <td>Manufacturer</td>
              <td>{this.props.item.manufacturer}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{this.props.item.brand}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{this.props.item.category}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{this.props.item.description}</td>
            </tr>
          </tbody>
        </table> 
        </div>
      </Fragment>
    )
  }
}

export default Product

