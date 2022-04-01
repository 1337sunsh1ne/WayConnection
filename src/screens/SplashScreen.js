/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <LottieView
        source={require('../../assets/splashScreen.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate('Login')}
        resizeMode="contain"
      />
    </View>
  );
}
