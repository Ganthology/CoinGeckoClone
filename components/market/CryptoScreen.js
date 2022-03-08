import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HEIGHT, WIDTH, LIGHTGREEN} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

const CryptoScreen = () => {
  return (
    <LinearGradient
      colors={['#1b1f22', '#004b23']}
      style={{
        alignItems: 'center',
        height: HEIGHT,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: WIDTH * 0.6,
          height: WIDTH * 0.15,
          marginTop: 10,
        }}>
        <LinearGradient
          colors={['#18f26c', '#18ceaf']}
          style={{
            width: 10,
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            marginRight: -10,
          }}
        />
        <View
          style={{
            backgroundColor: 'rgba(24, 242, 108, 0.15)',
            width: WIDTH * 0.6 - 10,
            borderRadius: 10,
            paddingLeft: 20,
          }}>
          <Text style={{color: 'white'}}>Global Market Cap</Text>
          <Text style={{color: 'white'}}>$1,123,445,425</Text>
        </View>
      </View>
      <Text>Cryptocurrency</Text>
    </LinearGradient>
  );
};

export default CryptoScreen;
