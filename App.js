
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useDimensions,useDeviceOrientation} from '@react-native-community/hooks'
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  SafeAreaView,
  numberOfLines,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  } from 'react-native';

export default function App() {

  // console.log(Dimensions.get("screen"));
  // console.log(useDimensions())
  console.log(useDeviceOrientation())

  const handelChange = () => {

    console.log("text clicked")

  }
  const ImagehandChange = () => {

    console.log("on image")

  }
  
  return (
    <View style={styles.container}>
       <View style={{
         
         backgroundColor:"blue",
         width:"100%",
         height:"30%"

       }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
   },
});

































// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableNativeFeedback,
//   TouchableHighlight,
//   SafeAreaView,
//   numberOfLines,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   Button,
//   Alert,
//   Platform,
  
// } from 'react-native';

// export default function App() {

//   const handelChange = () => {

//     console.log("text clicked")

//   }
//   const ImagehandChange = () => {

//     console.log("on image")

//   }
  
//   return (
//     <View style={styles.container}>
//       <Button title="Click me" onPress={() => Alert.alert("Title","message", [
//         { text: "pranit", onPress: () => console.log("pranit") },
//         { text: "paras", onPress: () => console.log("paras") }])}></Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? 30 : 0,
   
//   },
// });
// https://picsum.photos/id/237/200/300
//  <Image source={require("./assets/adaptive-icon.png")}/> //from locol image

// <Image 
// blurRadius={10}
// fadeDuration={1000}
// source={{
// width:300,
// height:200,
// uri:"https://picsum.photos/id/200/300"}}/>

// <Button title="Click me" onPress={() => alert("ok")}></Button>

  
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


// <View style={styles.container}>
// <TouchableNativeFeedback>
//  <View style={{width:100,height:300,backgroundColor:"blue"}} ></View>
// </TouchableNativeFeedback>
// // </View>