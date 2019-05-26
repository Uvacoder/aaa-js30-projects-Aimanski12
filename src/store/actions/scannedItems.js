
import {APIKEY, URL_PATH, URL_EXTENSION} from '../../assets/config'

export const startScanning = () => {
  return {
    type: "START_SCANNING"
  }
}

export const clearScanned = () => {
  return {
    type: 'CLEAR_SCANNED'
  }
}

export const setItem = (i) => {
  return {
    type: 'SET_ITEM',
    payload: i
  }
}

export const deleteItem = (i) => {
  return {
    type: 'DELETE_ITEM',
    payload: i
  }
}

export const processBarcode = (barcode) => {
  return dispatch => {
    dispatch(spinnerOn())
    
    let url = URL_PATH + barcode + URL_EXTENSION + APIKEY
    
    let req = new Request(url , {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      },
      mode: 'no-cors'
    })
    
    let product = null
    fetch(req)
    .catch(err => console.log('error', err))
    .then(res => {
      console.log(res.status)
      if(res.status !== 200){
        return {
          resStatus: res.status
        }
      } else if(res.status === 200) {
        return res.json()
      }
    })
    .then(parsedRes => {
      if(parsedRes.resStatus !== 200){
        parsedRes.resStatus === 0 ? dispatch(invalidBarcode('noAPI')) : dispatch(invalidBarcode('invalid'))
      } else {
        product = {
          barcode_number: parsedRes.products[0].barcode_number,
          barcode_type: parsedRes.products[0].barcode_type,
          product_name: parsedRes.products[0].product_name,
          product_image: parsedRes.products[0].images[0],
          manufacturer: parsedRes.products[0].manufacturer,
          brand: parsedRes.products[0].brand,
          category: parsedRes.products[0].category,
          description: parsedRes.products[0].description,
        }
        dispatch(productDetected(product))
      } 
    })
  }
  }

export const spinnerOn = () => {
  return {
    type: 'SPINNER_ON'
  }
}
  
  
export const productDetected = (product) => {
  return {
    type: 'PRODUCT_DETECTED',
    payload: product
  }
}

export const invalidBarcode = (err) => {
  let errText = err === 'noAPI' ? 'NO_API_KEY' : 'INVALID_BARCODE'
  return {
    type: errText,
  }
}