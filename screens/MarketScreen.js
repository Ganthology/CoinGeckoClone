import React from 'react';
import {View} from 'react-native';
import {CustomStatusBar} from '../components';
import {Navbar, MarketTabBar} from '../components/market';
import {HEIGHT, DARKGREEN} from '../utils';

const MarketScreen = () => {
  return (
    <View style={{height: HEIGHT}}>
      <CustomStatusBar backgroundColor={DARKGREEN} barStyle={'light-content'} />
      <Navbar />
      <MarketTabBar />
    </View>
  );
};

export default MarketScreen;
