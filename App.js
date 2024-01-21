import React from "react";

import Splash from "./src/screens/auth/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/auth/SignIn";
import SignUp from "./src/screens/auth/SignUp";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen        options={{
          headerTitleStyle: {
            color: 'blue', // Đặt màu chữ ở đây
          },
        }} name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;