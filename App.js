import React from "react"
import Splash from "./src/screens/auth/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import SignIn from "./src/screens/auth/SignIn";
import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import SignUp from "./src/screens/auth/SignUp";
import ViewComponent from "./src/screens/lab3/bai1_2";
import ModalComponent from "./src/screens/lab3/bai3";
import Bai1 from "./src/screens/lab4/bai1";
import Bai2 from "./src/screens/lab4/bai2";
import LoginScreen from "./src/screens/lab4/bai3";
import DirectoryItem from "./src/screens/lab4/DicrectoryItem";
import Bai3_Lab5 from "./src/screens/lab5/bai3";
import Bai1_Lab5 from "./src/screens/lab5/bai1";
import Bai2_Lab5 from "./src/screens/lab5/bai2";
import MainScreen from "./src/screens/lab6/MainScreen";
import DetailsScreen from "./src/screens/lab6/DetailsScreen";
import Bai1_Lab6 from "./src/screens/lab6/bai1stack";
import Bai2_Lab6 from "./src/screens/lab6/bai2Drawer";
import Crud from "./src/screens/lab8/CRUD";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Tabs = () => (
//   <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused }) => {
//         let icon;
//         if (route.name === 'Home') {
//           icon = focused
//             ? require('./src/assest/tabs/home_active.png')
//             : require('./src/assest/tabs/home.png')
//         } else if (route.name === 'Profile') {
//           icon = focused
//             ? require('./src/assest/tabs/profile_active.png')
//             : require('./src/assest/tabs/profile.png')
//         }else if (route.name === 'Profile') {
//           icon = focused
//             ? require('./src/assest/tabs/bookmark_active.png')
//             : require('./src/assest/tabs/bookmark.png')
//         }
//         return <Image style={{width:24, height:24}} source={icon} />;
//       },
//       headerShown: false,
//       tabBarShowLabel: false,
//       tabBarStyle: {borderTopColor: '#DADADA'},
//     })}>
//     <Tab.Screen name='Home' component={Home}/>
//     <Tab.Screen name='Favorites' component={Favorites}/>
//     <Tab.Screen name='Profile' component={Profile}/>
//   </Tab.Navigator >
// );


const App = () => {
//   const isSignedIn = true;
  return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isSignedIn ?(
//           <>
//             <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
//           </>
//         ) : (
//           <>
//         <Stack.Screen options={{
//           headerTitleStyle: {
//             color: 'blue', // Đặt màu chữ ở đây
//           },
//         }} name="Home" component={Splash} />
//         <Stack.Screen options={{
//           headerTitleStyle: {
//             color: 'blue', // Đặt màu chữ ở đây
//           },
//         }} name="SignIn" component={SignIn} />
//         <Stack.Screen options={{
//           headerTitleStyle: {
//             color: 'blue', // Đặt màu chữ ở đây
//           },
//         }} name="SignUp" component={SignUp} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
    <Crud  />
  );
};
export default App;