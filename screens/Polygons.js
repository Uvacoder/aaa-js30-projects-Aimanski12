import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps'
import mapStyle from './style.json'

export default class App extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {backgroundColor: '#1a1a1a'},
      headerTintColor: '#e4dad3'
    }
  }

  state = {
    focusedLocation: {
      latitude: 37.48825,
      longitude: -122.4324,
      latitudeDelta: 0.0700,
      longitudeDelta: 0.0400,
    },
    newLocation: {},
    chosenLocation: false,
    coords: []

  }

  selectLocation = (event) => {
    const coords = event.nativeEvent.coordinate
    this.setState(prevState => {
      return {
        coords: prevState.coords.concat({
          latitude: coords.latitude,
          longitude: coords.longitude
        })
      }
    })
  }

  render() {
    let polyGon = null
    let mapPoint = null
    let coordsInit = this.state.coords
    if(coordsInit.length >= 1){
      mapPoint = coordsInit.map(coord => {
        return <MapView.Marker 
                  key={Math.random()} coordinate={coord}/>
      })
    }
    if(coordsInit.length >= 3){
      polyGon = 
      <MapView.Polygon
        coordinates={coordsInit}
        fillColor="rgba(237,75,75, 0.5)"
        strokeColor="rgba(0,0,80,0.5)"
        strokeWidth={2}
        lineCap='round'
        />
    } 
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={this.state.focusedLocation}
          onPress={this.selectLocation}
          >
          {polyGon}
          {mapPoint}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    width: '100%',
    height: '110%'
  }
});
