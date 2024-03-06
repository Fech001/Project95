import "react-native-gesture-handler";
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "../navigation/DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";

export default function App(){
    return(
    <NavigationContainer>
        <DrawerNavigator/>
    </NavigationContainer>
    );
}