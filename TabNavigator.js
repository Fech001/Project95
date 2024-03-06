import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import IonIcons from "react-native-vector-icons.Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import Home from "../screens/Home";
import AboutUs from "../screens/About_us";
const Tab = createMaterialBottomTabNavigator();

const bottomTabNavigator = () => {
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={StyleSheet.bottomTabStyle}
            screensOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "About Us") {
                        iconName = focused ? "information-circle" : "information-circle-outline";
                    }
                    return (
                        <IonIcons
                            name={iconName}
                            size={RFValue(25)}
                            color={color}
                            style={StyleSheet.icons}
                        />
                    );
                }
            })}
            activeColor={"#"}
            inactiveColor={"gray"}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About Us" component={AboutUs} />
        </Tab.Navigator>
    );
};

const styles = Stylesheet.create({
    bottomTabStyle: {
        backgroundColor: "#",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(),
        height: RFValue()
    }
});

export default bottomTabNavigator;