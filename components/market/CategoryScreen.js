import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {HEIGHT, WIDTH, LIGHTGREEN} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';
import PercentIndicator from './PercentIndicator';
import axios from 'axios';

const CategoryItem = ({topCoins, title, marketCap, percentChange}) => {
  const formattedMarketCap = Number(marketCap.toFixed(0));

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.rowContainer, styles.topCoinCol]}>
        {topCoins.map(imageUrl => (
          <Image source={{uri: imageUrl}} style={styles.coinImage} />
        ))}
      </View>
      <Text style={[styles.boldText, styles.categoryCol]}>{title}</Text>
      <View style={[styles.percentageChangeCol]}>
        <PercentIndicator percentChange={percentChange.toFixed(1)} />
      </View>
      <Text style={[styles.normalText, styles.marketCapCol]}>
        {`$${formattedMarketCap.toLocaleString('en-US')}`}
      </Text>
    </View>
  );
};

const CategoryScreen = () => {
  const [categoryList, setCategoryList] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/coins/categories',
      params: {
        order: 'market_cap_desc',
      },
    })
      .then(function (response) {
        setCategoryList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
      <FlatList
        data={categoryList}
        renderItem={({item}) => (
          <CategoryItem
            topCoins={item.top_3_coins}
            title={item.name}
            marketCap={item.market_cap}
            percentChange={item.market_cap_change_24h}
          />
        )}
        style={styles.infoCardContainer}
        keyExtractor={item => item.id}
      />
    </LinearGradient>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 50,
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
    textAlign: 'left',
    alignItems: 'center',
  },
  categoryCol: {
    width: WIDTH * 0.25,
    textAlign: 'left',
  },
  percentageChangeCol: {
    width: WIDTH * 0.175,
    textAlign: 'right',
    alignItems: 'flex-end',
  },
  marketCapCol: {
    width: WIDTH * 0.3,
    textAlign: 'right',
  },
  itemContainer: {
    flexDirection: 'row',
    width: WIDTH,
    height: WIDTH * 0.125,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 0.05,
    borderBottomWidth: 0.25,
    borderBottomColor: 'darkgrey',
  },
  rowContainer: {flexDirection: 'row', justifyContent: 'flex-start'},
  coinImage: {height: 18, width: 18, margin: 1},
  normalText: {color: 'white', fontSize: 13},
  boldText: {color: 'white', fontSize: 13, fontWeight: '600'},
});
