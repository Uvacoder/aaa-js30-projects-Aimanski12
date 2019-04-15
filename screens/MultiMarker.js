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
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0021,
    },
    locationChosen: false,
    markers: []
  }

  changeLocation = (event) => {
    const coords = event.nativeEvent.coordinate
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true,
        markers: prevState.markers.concat({
          latitude: coords.latitude,
          longitude: coords.longitude,
        })
      }
    })
  }

  render() {
    let marker = null
    if(this.state.locationChosen){
      marker = this.state.markers.map(marker => {
        return <MapView.Marker key={Math.random()} coordinate={marker} />
      })
    }
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          onPress={this.changeLocation}
          ref={ref=> this.map = ref}
          showsUserLocation
          followsUserLocation
          initialRegion={this.state.focusedLocation} >
          {marker}
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
