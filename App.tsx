import React from "react";
import { View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import SplashScreen from "./src/screens/SplashScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();
export default function(){
  return(
  // <HomeScreen/>
  <NavigationContainer>
  <Stack.Navigator >
    <Stack.Screen name="splash" component={SplashScreen} options={{headerShown:false}}/>
    <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>


      
  </Stack.Navigator>
</NavigationContainer>
  )

}