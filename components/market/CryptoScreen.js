import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {HEIGHT, WIDTH, LIGHTGREEN} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import CryptoList from './CryptoList';

const CryptoScreen = () => {
  return (
    <LinearGradient
      colors={['#1b1f22', '#004b23']}
      style={styles.backgroundContainer}>
      <CryptoList />
    </LinearGradient>
  );
};

export default CryptoScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: 'center',
    height: HEIGHT,
    justifyContent: 'flex-start',
  },
});
