import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HEIGHT, WIDTH, LIGHTGREEN} from '../../utils';
import {GreenIndicator, RedIndicator} from '../../assets/images';
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
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(24, 242, 108, 0.1)',
            width: WIDTH * 0.6 - 10,
            borderRadius: 10,
            paddingLeft: 25,
          }}>
          <Text style={{color: '#959ea0', fontSize: 12}}>
            GLOBAL MARKET CAP
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 5,
            }}>
            <Text style={{color: 'white', fontSize: 14}}>
              $1,123,445,425,071{' '}
            </Text>
            <Image source={GreenIndicator} style={{height: 7, width: 7}} />
            <Text style={{color: LIGHTGREEN, fontSize: 14}}> 0.8%</Text>
          </View>
        </View>
      </View>
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
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(24, 242, 108, 0.1)',
            width: WIDTH * 0.6 - 10,
            borderRadius: 10,
            paddingLeft: 25,
          }}>
          <Text style={{color: '#959ea0', fontSize: 12}}>24H VOLUME</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 5,
            }}>
            <Text style={{color: 'white', fontSize: 14}}>
              $1,123,445,425,071{' '}
            </Text>
          </View>
        </View>
      </View>
      <Text>Cryptocurrency</Text>
    </LinearGradient>
  );
};

export default CryptoScreen;
