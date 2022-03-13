import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {HEIGHT, WIDTH, LIGHTGREEN} from '../../utils';
import {GreenIndicator, RedIndicator} from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import InfoCard from './InfoCard';
import SortingPill from './SortingPill';

const CryptoScreen = () => {
  const PLACEHOLDER_DATA = [
    {
      title: 'GLOBAL MARKET CAP',
      data: '1,123,445,425,071',
      percentChange: -0.8,
    },
    {title: '24H VOLUME', data: '63,300,448,366', percentChange: null},
  ];

  const SORTING_DATA = [
    {title: 'USD / BTC'},
    {title: 'All Coins'},
    {title: '24H'},
    {title: 'Sort By Market Cap'},
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
      <FlatList
        data={SORTING_DATA}
        renderItem={({item}) => <SortingPill title={item.title} />}
        style={styles.sortingPillsContainer}
        horizontal
      />
      {/* <View style={{flexDirection: 'row'}}>
        <SortingPill title={'USD / BTC'} />
        <SortingPill title={'All Coins'} />
        <SortingPill title={'24H'} />
        <SortingPill title={'Sort By Market Cap'} />
      </View> */}
      {/* <View style={{height: HEIGHT * 0.85}}>
        <Text style={{color: 'white'}}>FlatList</Text>
      </View> */}
      <Text style={{color: 'white'}}>Test</Text>
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
  infoCardContainer: {
    paddingLeft: WIDTH * 0.05,
    height: WIDTH * 0.225,
    flexGrow: 0,
  },
  sortingPillsContainer: {
    paddingLeft: WIDTH * 0.05,
    flexGrow: 0,
  },
});
