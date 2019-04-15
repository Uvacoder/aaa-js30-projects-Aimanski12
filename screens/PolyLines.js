import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps'
import mapStyle from './style.json'
import axios from 'axios'
import polyline from 'polyline'
import {API_KEY, URL_KEY} from '../config/config.keys'

export default class App extends Component {

   static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title')
    }
  }
  
  state = {
    focusedLocation: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0700,
      longitudeDelta: 0.0400,
    },
    locations: [],
    selectedLocation: false,
    polyLocation: false,
    polyLocationSelected: []
  }

  setLocation = (event) => {
    const coords = event.nativeEvent.coordinate
    if(this.state.locations.length === 2){
      this.setState(prevState => {
        return {locations: [{
          longitude: coords.longitude,
          latitude: coords.latitude
        }],
        polyLocation: false,
        polyLocationSelected: []
      }
      })
    } else {
      this.setState(prevState => {
        return {
          locations: prevState.locations.concat({
            longitude: coords.longitude,
            latitude: coords.latitude
          }),
          selectedLocation: true
        }
      })
    }
   
  }
  
  getRoute = () => {
    const startLoc = this.state.locations.map(loc => {
      return `${loc.latitude},${loc.longitude}`
    })
  axios.get(URL_KEY+startLoc[0]+'&destination='+startLoc[1]+'&key='+API_KEY)
    .then(res=>{
      const points = polyline.decode(res.data.routes[0].overview_polyline.points)
      const routes = points.map(point =>{
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({polyLocationSelected: routes, polyLocation: true})
    })
    .catch(err=>console.log(err))
  }

  render() {
    let marker = null
    let polyLocs = null
    if(this.state.locations.length >= 1){
      if(this.state.locations.length === 2 && this.state.polyLocation === false ){
        this.getRoute()
      }
      marker = this.state.locations.map(location => {
        return <MapView.Marker
                key={Math.random()}
                coordinate={location} />
      })
    }
    if(this.state.polyLocation){
      polyLocs = <MapView.Polyline
                  strokeColor="#0d527e"
                  strokeWidth={6}
                  coordinates={this.state.polyLocationSelected} />
    }
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          customMapStyle={mapStyle}
          initialRegion={this.state.focusedLocation}
          onPress={this.setLocation}
          >
          {marker}
          {polyLocs}
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
