import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  SafeAreaView,
  numberOfLines,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

export default function App() {

  const handelChange = () => {

    console.log("text clicked")

  }
  const ImagehandChange = () => {

    console.log("on image")

  }
  
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
       <View style={{width:100,height:300,backgroundColor:"blue"}} ></View>
      </TouchableNativeFeedback>
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

// <Image 
// blurRadius={10}
// fadeDuration={1000}
// source={{
// width:300,
// height:200,
// uri:"https://picsum.photos/id/200/300"}}/>



  
// <Image 
  
// source={{
// width:300,
// height:200,
// uri:"https://picsum.photos/id/200/300"}}/>

// </TouchableHighlight>


// <View style={styles.container}>
// <TouchableNativeFeedback
//   onPress={() => {
//     setRippleColor(randomHexColor());
//     setRippleOverflow(!rippleOverflow);
//   }}
//   background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
// >
//   <View style={styles.touchable}>
//     <Text style={styles.text}>TouchableNativeFeedback</Text>
//   </View>
// </TouchableNativeFeedback>
// </View>