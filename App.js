import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image ,SafeAreaView,numberOfLines} from 'react-native';

export default function App() {

  const handelChange = () => {

    console.log("text clicked")

  }
  
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handelChange}> This is pranit
       </Text>
         <Image 
         
         blurRadius={10}
         fadeDuration={1000}
         source={{
           width:300,
           height:200,
          uri:"https://picsum.photos/id/200/300"}}/>
         <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center"
   
  },
});
// https://picsum.photos/id/237/200/300
//  <Image source={require("./assets/adaptive-icon.png")}/> //from locol image