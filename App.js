import React from "react";

import Splash from "./src/screens/auth/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";
import ViewComponent from "./src/screens/lab3/bai1_2";
import ModalComponent from "./src/screens/lab3/bai3";
import Bai1 from "./src/screens/lab4/bai1";
import Bai2 from "./src/screens/lab4/bai2";
import LoginScreen from "./src/screens/lab4/bai3";
import DirectoryItem from "./src/screens/lab4/DicrectoryItem";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen options={{
    //       headerTitleStyle: {
    //         color: 'blue', // Đặt màu chữ ở đây
    //       },
    //     }}name="Home" component={Splash}/>
    //     <Stack.Screen options={{
    //       headerTitleStyle: {
    //         color: 'blue', // Đặt màu chữ ở đây
    //       },
    //     }} name="SignIn" component={SignIn}/>
    //     <Stack.Screen  options={{
    //       headerTitleStyle: {
    //         color: 'blue', // Đặt màu chữ ở đây
    //       },
    //     }} name="SignUp" component={SignUp}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Bai1 />
  );
};
export default App;