import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {HEIGHT, WIDTH, LIGHTGREEN} from '../../utils';
import {GreenIndicator, RedIndicator} from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import InfoCard from './InfoCard';

const CryptoScreen = () => {
  const PLACEHOLDER_DATA = [
    {
      title: 'GLOBAL MARKET CAP',
      data: '1,123,445,425,071',
      percentChange: -0.8,
    },
    {title: '24H VOLUME', data: '63,300,448,366', percentChange: null},
  ];

  return (
    <LinearGradient
      colors={['#1b1f22', '#004b23']}
      style={styles.backgroundContainer}>
      <FlatList
        data={PLACEHOLDER_DATA}
        renderItem={({item}) => (
          <InfoCard
            title={item.title}
            data={item.data}
            percentChange={item.percentChange}
          />
        )}
        style={styles.infoCardContainer}
        horizontal
      />
      <Text>Cryptocurrency</Text>
    </LinearGradient>
  );
};

export default CryptoScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: 'center',
    height: HEIGHT,
  },
  infoCardContainer: {paddingLeft: WIDTH * 0.05},
});
