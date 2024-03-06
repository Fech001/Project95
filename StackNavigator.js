import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import MethodScreen from "../screens/MethodScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.TabNavigator
        initialRouteName = "Home"
        screenOptions = {{
            headerShown: false
        }}
        >
            <Stack.Screen name = "Home" component = {TabNavigator}/>
            <Stack.Screen name = "MethodScreen" component = {MethodScreen}/>
        </Stack.TabNavigator>
    );
};

export default StackNavigator;
