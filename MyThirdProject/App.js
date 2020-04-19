import React, {useState} from 'react';
import {Text, View, Button } from 'react-native';

function TV() {

  const [isOff, setIsOff] = useState(true);
return(
  <View>
    {"\n\n\n\n"}
    <Text>
      This is {props.name} TV, and it is {isOff ? "OFF" : "Turned me on"}
    </Text>
    <Button
      onPress = {() => {
        setIsOff(false);
        }}
        disabled = {!isOff}
        title = {isOff ? "Turn me on, Please!" : "Thank you!"}
      />
    </View>
);

}

export default function MultiTV(){
  return(
    <View>
      <TV name = "LG" />
      <TV name = "Sony" />
    </View>
  )
}



