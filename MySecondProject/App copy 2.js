import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {
  function getFullName(fname, mName, lName){
    return fname + " " + mName + " " + lName;
  }

  const pet = "Dog";
  return (
    <Text>
      {"\n\n\n\n\n\n"}
      Hello, I am a student in CIS340! {"\n"}
      My full name is {getFullName("Hayden", "Sachie", "Smith")} {"\n"}
      I have a {pet}!
    </Text>
  
  );
}


