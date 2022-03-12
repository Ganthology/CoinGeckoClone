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
      style={{
        alignItems: 'center',
        height: HEIGHT,
      }}>
      <FlatList
        data={PLACEHOLDER_DATA}
        renderItem={({item}) => (
          <InfoCard
            title={item.title}
            data={item.data}
            percentChange={item.percentChange}
          />
        )}
        horizontal
      />
      <View style={{flexDirection: 'row'}}>
        <InfoCard
          title={'GLOBAL MARKET CAP'}
          data={'1,123,445,425,071'}
          percentChange={-0.8}
        />
        <InfoCard title={'24H VOLUME'} data={'63,300,448,366'} />
      </View>
      <Text>Cryptocurrency</Text>
    </LinearGradient>
  );
};

export default CryptoScreen;
