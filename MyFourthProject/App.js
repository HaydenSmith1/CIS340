import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


  const dog = {
    uri: 'https://raw.githubusercontent.com/HaydenSmith1/CIS340/master/images/dog2.png',
    width: 64,
    height: 64
  };

  export default MyScrollViewApp = () => (
   <ScrollView>
     <Text style {{fontsize: 80}}> Try to scroll down</Text>
     <Image source= {required('./assets/dog2.png')} style={{width: 64, height: 64}} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Text style {{fontsize: 80}}> Try to scroll down again, if you like</Text>
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Text style {{fontsize: 80}}> Try to scroll down again, if you like</Text>
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Text style {{fontsize: 80}}> Try to scroll down again, if you like</Text>
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Text style {{fontsize: 80}}> React Native Components!</Text>
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
     <Image source= {dog} />
   </ScrollView>  
   );



