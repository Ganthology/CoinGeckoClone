import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {HEIGHT, WIDTH, LIGHTGREEN} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

const CategoryScreen = () => {
  return (
    <LinearGradient
      colors={['#1b1f22', '#004b23']}
      style={styles.backgroundContainer}>
      <View style={styles.headerRowContainer}>
        <Text style={[styles.headerRow, styles.topCoinCol]}>TOP COINS</Text>
        <Text style={[styles.headerRow, styles.categoryCol]}>CATEGORY</Text>
        <Text style={[styles.headerRow, styles.percentageChangeCol]}>24H</Text>
        <Text style={[styles.headerRow, styles.marketCapCol]}>M.CAP</Text>
      </View>
    </LinearGradient>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: 'center',
    height: HEIGHT,
    justifyContent: 'flex-start',
  },
  headerRowContainer: {
    flexDirection: 'row',
    width: WIDTH,
    height: WIDTH * 0.0825,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 0.05,
    borderBottomWidth: 0.25,
    borderBottomColor: 'darkgrey',
  },
  headerRow: {
    color: 'darkgrey',
    fontSize: 11,
  },
  cryptoRow: {
    color: 'white',
    fontSize: 13,
  },
  topCoinCol: {
    width: WIDTH * 0.175,
    textAlign: 'center',
    alignItems: 'center',
  },
  categoryCol: {
    width: WIDTH * 0.2,
    textAlign: 'right',
  },
  percentageChangeCol: {
    width: WIDTH * 0.175,
    textAlign: 'right',
    alignItems: 'flex-end',
  },
  marketCapCol: {
    width: WIDTH * 0.35,
    textAlign: 'right',
  },
});
