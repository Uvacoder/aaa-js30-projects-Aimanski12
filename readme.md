## React Native Native Camera

> This is a React Native project that renders camera and allows the user to capture images and puts the images in a cloud storage with Google Firebase.

<div float="left">
  <a href="https://www.youtube.com/watch?v=BcZZbDwvVFw&feature=youtu.be">
    <img src="https://user-images.githubusercontent.com/32781697/56854352-ad4b0b80-68fa-11e9-88d5-cb93e8ce7b79.png" alt="screen shot">
  </a>
</div>

> Things I learned in this project;
  * How to set up React Native Camera and in my code stack.
  * How to process the image data that is returned when you capture image. 
  * How to create a cloud storage for the images you captured and generate a data link from the storage where the user can use them from the app.
  * How to render modals.
  * How to generate user feedback actions.
  * How to use redux as a global state for the app.

> Libraries Used:
  * [React Native Camera](https://github.com/react-native-community/react-native-camera)
  * [Redux](https://redux.js.org/).
  * [Google Firebase](https://console.firebase.google.com/). 
  * [React Native Networking](https://facebook.github.io/react-native/docs/network). 



## Installation

Create a new application with
```bash
$ react-native init project-name
```

cd to your project-name and install the following external libraries in your project;

```bash
$ npm install react-native-camera
$ npm install firebase
$ npm install react-redux
```
After installation, check the documentation for [React Native Camera](https://github.com/react-native-community/react-native-camera) on how to set-up the camera in your code stack. You can just follow the guide for set-up. You also need to set up a back end for your data storage. With this, you need [Google Firebase](https://console.firebase.google.com/) and you can read the [documentation](https://firebase.google.com/docs/storage/) in this link on how to set up your back end.

## Contributing

If you find bugs with this project, pull requests are always welcome. You can [create an issue here](https://github.com/Aimanski12/MyReactNativeProjects/issues/new).
Your :star: are also greatly appreciated.

## Author

[Aimanski12](https://github.com/Aimanski12).
Thank you very very much for giving this project a :star:

## License 

Copyright © 2019, [Aimanski12](https://github.com/Aimanski12).
Released under the [MIT License](LICENSE).

