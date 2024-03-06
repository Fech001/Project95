import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


let customFonts = {
  "Dosis-VariableFont": require("../assets/fonts/Dosis-VariableFont_wght.ttf")
};

export default class Sustainable_Meal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <TouchableOpacity
         onPress = {()=>
         this.props.navigation.navigate("MethodScreen",
          {meal :this.props.meal})}>

           
       
          
        <View style={styles.container}>
          <View style={styles.methodContainer}>
            <Image
              source={require("../assets/recycle.png")}
              style={styles.sustainableImage}
            ></Image>

            <View style={styles.nameContainer}>
              <Text style={styles.mealNameText}>
                {this.props.meal.name}
              </Text>
              <Text style={styles.mealDifficultyText}>
                {this.props.meal.difficulty}
              </Text>
              <Text style={styles.servingText}>
                {this.props.meal.serving}
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  methodContainer: {
    margin: RFValue(13),
    
    backgroundColor: "#A17122",
    borderRadius: RFValue(20)
  },
  sustainableImage: {
    resizeMode: "contain",
    width: "90%",
    alignSelf: "center",
    height: RFValue(250)
  },
  nameContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  mealNameText: {
    fontSize: RFValue(25),
    fontFamily: "Dosis-VariableFont",
    textDecoration: "underline",
    color: "black"
  },
  mealDifficultyText: {
    fontSize: RFValue(18),
    fontFamily: "Dosis-VariableFont",
    color: "black"
  },
  servingText: {
    fontFamily: "Dosis-VariableFont",
    fontSize: 15,
    color: "black",
    paddingTop: RFValue(10)
  }
});