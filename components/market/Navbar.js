import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  SearchButtonDark,
  SearchButtonLight,
  CoinGeckoLogoDark,
  CoinGeckoLogoLight,
  BellButtonDark,
  BellButtonLight,
  Candy,
} from '../../assets/images';
import {WIDTH, DARKGREEN} from '../../utils';

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.leftNavInner}>
        <Image style={styles.icon} source={BellButtonDark} />
      </View>
      <View style={styles.centerNavInner}>
        <CoinGeckoLogoDark width={120} height={50} />
      </View>
      <View style={styles.rightNavInner}>
        <Candy width={30} height={30} />
        <Image style={styles.icon} source={SearchButtonDark} />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: DARKGREEN,
    width: WIDTH,
  },
  leftNavInner: {
    width: WIDTH * 0.3,
    paddingLeft: WIDTH * 0.04,
  },
  centerNavInner: {
    width: WIDTH * 0.4,
    alignItems: 'center',
  },
  rightNavInner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: WIDTH * 0.3,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
