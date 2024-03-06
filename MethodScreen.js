import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions,
    ScrollView
} from "react-native";

import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

let customFonts = {
    "Dosis-VariableFont": require("../assets/fonts/Dosis-VariableFont_wght.ttf")
};

export default class MethodScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false,
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
        if (!this.props.route.params) {
            this.props.navigation.navigate("Home");
        } else if (this.state.fontsLoaded) {
            SplashScreen.hideAsync();
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image
                                source={require("../assets/logo.png")}
                                style={styles.iconImage}></Image>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text>Sustainability App</Text>
                        </View>
                    </View>
                    <View style={styles.mealContainer}>
                        <ScrollView style={styles.mealMethod}>
                            <Image
                                source={require("../assets/recycle.png")}
                                style={styles.image}></Image>
                            <View style={styles.dataContainer}>
                                <View styles={styles.nameTextContainer}>
                                    <Text style={styles.mealNameText}>
                                        {this.props.route.params.meal.name}
                                    </Text>
                                    <Text style={styles.mealDifficultyText}>
                                        {this.props.route.params.meal.difficulty}
                                    </Text>
                                    <Text style={styles.mealTimeText}>
                                        {this.props.route.params.meal.time}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.MethodTextContainer}>
                                <Text style={styles.methodText}>
                                    {this.props.route.params.meal.method}
                                </Text>
                                <Text style={styles.ingredientsText}>
                                    Ingredients - {this.props.route.params.meal.ingredients}
                                </Text>
                            </View>
                            <View style={styles.actionContainer}>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A17122"
      },
      droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
      appTitle: {
        flex: 0.07,
        flexDirection: "row",
        textDecoration: "underline"
      },
      appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
      },
      appTitleText: {
        color: "black",
        fontSize: RFValue(28),
        fontFamily: "Dosis-VariableFont"
      },
      mealContainer: {
        flex: 1
      },
      mealMethod: {
        margin: RFValue(20),
        backgroundColor: "#E5D6B3",
        borderRadius: RFValue(20)
      },
      image: {
        width: "120%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "contain"
      },
      dataContainer: {
        flexDirection: "row",
        padding: RFValue(20)
      },
      nameTextContainer:{
        flex: 0.8
      },
      mealNameText: {
        color: "black",
        fontSize: RFValue(25),
        fontFamily: "Dosis-VariableFont"
      },
      mealDifficultyText: {
        fontFamily: "Dosis-VariableFont",
        color: "black",
        fontSize: RFValue(20)
      },
      MethodTextContainer: {
        padding: RFValue(20)
      },
      methodText: {
        fontFamily: "Dosis-VariableFont",
        fontSize: RFValue(20),
        color: "black"
      },
      actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin : RFValue(10)
      }
})