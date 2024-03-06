import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';

import * as Font from 'expo-font';
import { RFValue } from 'react-native-responsive-fontsize';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Dosis-VariableFont': require('../assets/fonts/Dosis-VariableFont_wght.ttf'),
};

export default class Settings extends Component {
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
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>About us</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.aboutUs}>
              <View style={styles.aboutUsTextContainer}>
                <Text style={styles.aboutUsText}> A sustainable diet is beneficial for your health and contributes to protecting the environment. Our app helps you choose to eat a wide variety of sustainable ingredients, more plants than animals, and foods which are healthy and minimally-processed.
                We would love to hear some feedback and other sustainable meals to add! Let us know how we can
                  improve our app and/or any issues you may have faced.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.fieldsContainer}>
            <ScrollView>
              <TextInput
                style={styles.inputFont}
                placeholder={'Feedback'}
                placeholderTextColor="black"
                
              />
            </ScrollView>
            <ScrollView>
              <TextInput
                style={styles.inputFont}
                placeholder={'Sustainable Meal recommendations'}
                placeholderTextColor="black"
                
              />
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
    backgroundColor: '#E5D6B3',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.15,
    flexDirection: 'row',
    textDecoration: 'underline',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '120%',
    height: '120%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'black',
    fontSize: RFValue(28),
    fontFamily: 'Dosis-VariableFont',
  },
  aboutUsText: {
    color: 'black',
    fontSize: RFValue(20),
    fontFamily: 'Dosis-VariableFont',
  },
  aboutUs: {
    flex: 1,
    flexDirection: 'center',
    
  },
  aboutUsTextContainer: {
    flex: 1,
    justifyContent: 'center',
    addingLeft: RFValue(10),
  },
  fieldsContainer: {
    flex: 1,
  },
  inputFont: {
    height: RFValue(70),
    borderColor: 'white',
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: 'white',
    marginTop: RFValue(10),
    fontFamily: 'Dosis-VariableFont',
  },
});