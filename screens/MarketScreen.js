import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {CustomStatusBar} from '../components';
import {
  SearchButtonDark,
  SearchButtonLight,
  CoinGeckoLogoDark,
  CoinGeckoLogoLight,
  BellButtonDark,
  BellButtonLight,
  Candy,
} from '../assets/images';

const MarketScreen = () => {
  return (
    <View>
      <CustomStatusBar backgroundColor={'#0b2c24'} barStyle={'light-content'} />
      <View style={styles.navbarContainer}>
        <View style={styles.leftNavInner}>
          <Image style={styles.icon} source={BellButtonDark} />
        </View>
        {/* <Image style={styles.logo} source={CoinGeckoLogoDark} /> */}
        <View style={styles.centerNavInner}>
          <CoinGeckoLogoDark width={120} height={50} />
        </View>
        <View style={styles.rightNavInner}>
          <Candy width={30} height={30} />
          <Image style={styles.icon} source={SearchButtonDark} />
        </View>
      </View>
    </View>
  );
};

export default MarketScreen;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0b2c24',
    width: width,
  },
  leftNavInner: {
    width: width * 0.3,
    paddingLeft: width * 0.04,
  },
  centerNavInner: {
    width: width * 0.4,
    alignItems: 'center',
  },
  rightNavInner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 0.3,
  },
  icon: {
    width: 25,
    height: 25,
  },
  logo: {
    width: 50,
    height: 30,
  },
});
