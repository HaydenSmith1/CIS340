import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function app() {

  const [selectedImage, setSelectedImage ] = React.useState(null)
  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission is required");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri});
  };

  if (selectedImage != null) {
    <View style ={styles.container}>
      <Image source={{uri: selectedImage.localUri}} style={styles.selImage}/>
    </View>
  }

  //end of code
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://raw.githubusercontent.com/HaydenSmith1/CIS340/master/images/logo.png'}}
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
  },

  selImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }

});
