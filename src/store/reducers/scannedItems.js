
const initialState = {
  spinner: false,
  startScanning: false,
  scannedItems: [],
  productScanned: null,
  invalidBarcode: false
}

const scannedItems = (state = initialState, action) => {

  switch(action.type){
    case 'START_SCANNING':
      return{
        ...state,
        startScanning: true,
        productScanned: null
      }
    case 'SPINNER_ON':
      return {
        ...state,
        startScanning: false,
        spinner: true
      }
    case 'PRODUCT_DETECTED':
      return {
        ...state,
        productScanned: action.payload,
        invalidBarcode: false,
        spinner: false,
        startScanning: false,
        scannedItems: [...state.scannedItems, action.payload]
      }
    case 'INVALID_BARCODE':
      return {
        ...state,
        productScanned: null,
        spinner: false,
        invalidBarcode: true
      }
      case 'CLEAR_SCANNED':
        return {
          ...state,
          productScanned: null
        }
      case 'SET_ITEM': 
        let selected = state.scannedItems.filter((item, i)=> {
           return i === action.payload
        })
        return {
          ...state,
          productScanned: {...selected[0]}
        }
      case 'DELETE_ITEM':
        return {
          ...state,
          scannedItems: state.scannedItems.filter((item, i) => {
            return i !== action.payload
          })
        }
    default: return state
  }
}

export default scannedItems