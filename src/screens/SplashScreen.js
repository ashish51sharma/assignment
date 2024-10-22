import React, { Component } from 'react';
import { SafeAreaView, View, StatusBar, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

import logo from '../assets/logo/logo.png';

export default class SplashScreen extends Component {
  
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('home');
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <View>
          <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />

          <Image  style={{ width: wp(40), height: wp(40), alignSelf: 'center' }} source={logo} />

        </View>
      </SafeAreaView>
    );
  }
}
