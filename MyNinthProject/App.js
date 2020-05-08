import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TextInputComponent } from 'react-native';
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";


class WeatherForecast extends Component {

  constructor (props){
    super(props);
    this.state = {zip: "", forecast: null};


  }

_hndleTextChange = event => {
  let zip = event.nativeEvent.Text;
  OpenWeatherMap.fetchForecast(zip).then(Forecast => {
    this.setState({ forecast: forecast})
  });
}

render() {

let content = null;
if (this.state.forecast !== null){
  content = (
    <Forecast 
    main={this.state.forecast.main}
    description={this.state.forecast.description}
    temp={this.state.forecast.temp}
    />


  );
}


  return (
    <View style={styles.container}>
    <Image
    source={require("./assets/sky.jpg")}
    resizeMode="cover"
    style={styles.backdrop}
    />
    <View style={styles.overlay}>
      <View style={styles.row}>
        <Text style={styles.mainText}>
          Current Weather for:
        </Text>
        <View style={styles.zipContainer}>
          <TextInput
          style={[styles.zipCode, styles.mainText]}
          onSubmitEditing={this._hndleTextChange}          />
        </View>
      </View>
      {content}
    </View>
    </View>
  );
}
}
const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: "center", paddingTop: 30, backgroundColor: "#000000", },
  backdrop: {flex: 1, flexDirection: "column"},
  overlay: {
    paddingTop: 5,
    opacity: 0.5,
    flexDirection: "column",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    padding: 30
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: "#FFFAF0",
    borderBottomwidth: 3,
    marginLeft: 18,

  },
  zipCode: {flex: 1, width: 60, height: baseFontSize},
  mainText: {fontSize: basweFontSize, color: "#FFFAF0"}
});

export default WeatherForecast;