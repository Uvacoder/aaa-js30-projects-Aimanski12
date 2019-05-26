# Barcode Scanner 

> This is app allows you to scan barcodes directly from the user's browser. The app is using [Quagga](https://serratus.github.io/quaggaJS/) a javascript library that streams the user's camera and then searches for any barcodes rendered from the streamed video. The app fetches data from [Barcode API](https://www.barcodelookup.com/api) and then returns product information related to the barcode. 

[View it from your browser](https://aimanski-react06-barcodescan.firebaseapp.com/). Deployed at firebase.

[Watch Short Video Clip](https://www.youtube.com/watch?v=RHSBdVFhjZs&feature=youtu.be).

<div float="left">
  <a href="https://www.youtube.com/watch?v=RHSBdVFhjZs&feature=youtu.be">
    <img src="https://user-images.githubusercontent.com/32781697/57206082-c56cfb80-6f88-11e9-8d76-a94aef05d1f2.gif" alt="screen shot">
  </a>
</div>

> Thing I learned in this project;
  * How to set-up a barcode scanner user Quagga library.
  * How to use fetch data and process the returned data from Barcode API.
  * React Router refresher.
  * How to reuse components in the application and create lesser yet faster code.

> Libraries Used:
  * [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
  * [Quagga JS](https://serratus.github.io/quaggaJS/)
  * [Barcode API](https://www.barcodelookup.com/api)
  * [React-Redux](https://redux.js.org/basics/usage-with-react)
  * [Redux-Thunk](https://www.npmjs.com/package/redux-thunk).

## Installation

Create a new application with 

```bash
$ npx create-react-app my-app
```

Then you can cd into your application and the you can start install all the dependencies;
```bash
$ npm install quagga
$ npm install react-redux
$ npm install redux
$ npm install redux-think
```

## Contributing

If you find bugs with this project, pull requests are always welcome. You can [create an issue here](https://github.com/Aimanski12/MyReactNativeProjects/issues/new).
Your :star: are also greatly appreciated.

[View other projects](https://github.com/Aimanski12/MyReactNativeProjects)

## Author

[Aimanski](https://github.com/Aimanski12).

## License 

Copyright © 2019, [Aimanski12](https://github.com/Aimanski12).
Released under the [MIT License](LICENSE).




