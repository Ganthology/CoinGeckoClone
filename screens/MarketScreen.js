import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
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
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#aacc00'}}
    style={{
      backgroundColor: '#0b2c24',
      borderBottomWidth: 1.5,
      borderBottomColor: 'grey',
    }}
    renderLabel={({route, focused, color}) => (
      <Text style={{color: focused ? '#aacc00' : color}}>{route.title}</Text>
    )}
    scrollEnabled
  />
);

const MarketScreen = () => {
  const [index, setIndex] = useState(0);

  const [routes] = React.useState([
    {key: 'crypto', title: 'Cryptocurrency'},
    {key: 'category', title: 'Categories'},
    {key: 'exchange', title: 'Exchanges'},
    {key: 'derivative', title: 'Derivatives'},
  ]);

  const CryptoRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}}>
      <Text>Cryptocurrency</Text>
    </View>
  );

  const CategoryRoute = () => (
    <View style={{flex: 1, backgroundColor: '#aacc00'}}>
      <Text>Categories</Text>
    </View>
  );

  const ExchangeRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}}>
      <Text>Exchanges</Text>
    </View>
  );

  const DerivativeRoute = () => (
    <View style={{flex: 1, backgroundColor: '#aacc00'}}>
      <Text>Derivatives</Text>
    </View>
  );

  const renderScene = SceneMap({
    crypto: CryptoRoute,
    category: CategoryRoute,
    exchange: ExchangeRoute,
    derivative: DerivativeRoute,
  });

  return (
    <View style={{height: height}}>
      <CustomStatusBar backgroundColor={'#0b2c24'} barStyle={'light-content'} />
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
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: width}}
        renderTabBar={renderTabBar}
      />
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
});
