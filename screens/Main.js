import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import img from '../config/background.png'

class Main extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    routes: [{
      title: 'Animate Map Marker',
      route: 'AnimatedMarker'
    }, {
      title: 'Multi-map Marker',
      route: 'MultiMarker'
    }, {
      title: 'Map Polygons',
      route: 'Polygons'
    },{
      title: 'Map Polylines',
      route: 'PolyLines'
    }]
  }

  render() {
    let routes = this.state.routes.map(route => {
      return (
        <TouchableOpacity 
          key={Math.random()}
          style={styles.view}
          onPress={()=>this.props.navigation.navigate(route.route, {
            title: route.title
          })}>
          <Text style={styles.text}>{route.title}</Text>
         </TouchableOpacity>
      )       
    })
    return (
      <ImageBackground source={img} style={styles.img}>
        <View style={styles.container}>
          {routes}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  view: {
    width: 250,
    height: 45,
    backgroundColor: '#1a1a1a',
    marginBottom: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#e4dad3'
  },
  text: {
    textAlign: 'center',
    color: '#e4dad3',
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 7
  }
});

export default Main