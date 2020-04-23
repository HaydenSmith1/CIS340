import React from 'react';
import { Text, View, FlatList, SectionList } from 'react-native';

  export default StatesApp = () => {
    return (
      <View style={{flex: 1, paddinngTop22}}>
        <SectionList
        sections={[
          {title: 'A', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
          {title: 'C', data: ['California', 'Colorado', 'Connecticut']},
          {title: 'D', data: ['Delaware']},
          {title: 'F', data: ['Florida']},
          {title: 'G', data: ['Georgia']},
          {title: 'H', data: ['Hawaii']},

        ]}
        renderItems={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44,}}> {item.key}</Text>}
        renderSectionHeader={({section}) => <Text style= {{paddingTop: 4, paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        fontSize: 14,
        fontWeight:'bold'
        backgroundColor:'9FA8DA'}} >{section.title}</Text>
        keyExtractor={(item,index)=>index}
        />
        </View>
    );
      }


