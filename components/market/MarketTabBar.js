import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import CryptoScreen from './CryptoScreen';
import CategoryScreen from './CategoryScreen';
import ExchangesScreen from './ExchangesScreen';
import {WIDTH, LIGHTGREEN, DARKGREEN} from '../../utils';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: LIGHTGREEN}}
    style={styles.tabBar}
    renderLabel={({route, focused, color}) => (
      <Text style={{color: focused ? LIGHTGREEN : color}}>{route.title}</Text>
    )}
    scrollEnabled
  />
);

const MarketTabBar = () => {
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    {key: 'crypto', title: 'Cryptocurrency'},
    {key: 'category', title: 'Categories'},
    {key: 'exchange', title: 'Exchanges'},
    {key: 'derivative', title: 'Derivatives'},
  ]);

  const CryptoRoute = () => (
    <View style={{flex: 1, backgroundColor: DARKGREEN}}>
      <Text>Cryptocurrency</Text>
    </View>
  );

  const CategoryRoute = () => (
    <View style={{flex: 1, backgroundColor: LIGHTGREEN}}>
      <Text>Categories</Text>
    </View>
  );

  const ExchangeRoute = () => (
    <View style={{flex: 1, backgroundColor: DARKGREEN}}>
      <Text>Exchanges</Text>
    </View>
  );

  const DerivativeRoute = () => (
    <View style={{flex: 1, backgroundColor: LIGHTGREEN}}>
      <Text>Derivatives</Text>
    </View>
  );

  const renderScene = SceneMap({
    crypto: CryptoScreen,
    category: CategoryScreen,
    exchange: ExchangesScreen,
    derivative: DerivativeRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: WIDTH}}
      renderTabBar={renderTabBar}
      swipeEnabled={false}
    />
  );
};

export default MarketTabBar;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: DARKGREEN,
    borderBottomWidth: 1.5,
    borderBottomColor: 'grey',
  },
});
