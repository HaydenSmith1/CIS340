import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default class myApp extends Component() {

constructor(props) {
  super(props);
  this.state = {count: 0};

}

onTap = () => {
  this.setState({
    count: this.state.count + 1
  });
}

rendor() {
const {count} = this.state;
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://raw.githubusercontent.com/HaydenSmtih1/CIS340/master/images/logo.png' }}
          style={styles.logo} />

          <Text style={styles.insts}>
            Press the button below to select an image on your phobe!
          </Text>
     
    <TouchableOpacity style = {styles.button} onPress{() => alert('You have not selected an image yet')}>
>
    

      <Text>style={styles.buttonText}>PickImage</Text>

    </TouchableOpacity>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#FFEEFE0"
  },

  button: {
  
    backgroundColor: "#778899",
    padding: 20,
    borderRadius: 5
  },
  
  insts: {
    fonstSize: 18,
    color: "#888",
    marginHorizontal: 15,
    marginButton: 10
  },

  logo: {
    width: 310,
    height: 300,
    marginButton: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }

});
