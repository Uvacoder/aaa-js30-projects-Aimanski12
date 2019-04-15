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
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    newLocation: {},
    chosenLocation: false
  }

  selectLocation = (event) => {
    const coords = event.nativeEvent.coordinate
    this.marker._component.animateMarkerToCoordinate({
      ...this.props.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          ref={marker => this.marker = marker}
          initialRegion={this.state.focusedLocation}
          onPress={this.selectLocation}
          >
          <MapView.Marker.Animated
            ref={marker => {this.marker = marker}}
            coordinate={this.state.focusedLocation}
            />
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
  },
});
