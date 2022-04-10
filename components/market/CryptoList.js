import React, {useState, useEffect, useCallback} from 'react';
import {
  RefreshControl,
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {HEIGHT, WIDTH} from '../../utils';
import axios from 'axios';
import InfoCard from './InfoCard';
import SortingPill from './SortingPill';
import PercentIndicator from './PercentIndicator';

const CryptoItem = ({rank, coin, price, changes, marketCap, imageUrl}) => {
  return (
    <View style={styles.cryptoRowContainer}>
      <Text style={[styles.cryptoRow, styles.rankCol]}>{rank}</Text>
      <View style={styles.coinCol}>
        <Image source={{uri: imageUrl}} style={styles.coinImage} />
        <Text style={styles.cryptoRow}>{coin.toUpperCase()}</Text>
      </View>
      <Text style={[styles.cryptoRow, styles.priceCol]}>{`$${price
        .toFixed(2)
        .toLocaleString('en-US')}`}</Text>
      <View style={[styles.cryptoRow, styles.percentageChangeCol]}>
        <PercentIndicator percentChange={changes.toFixed(1)} />
      </View>
      <Text
        style={[
          styles.cryptoRow,
          styles.marketCapCol,
        ]}>{`$${marketCap.toLocaleString('en-US')}`}</Text>
    </View>
  );
};

const CryptoList = () => {
  const [list, setList] = useState([]);

  const [page, setPage] = useState(1);

  const [refreshing, setRefreshing] = useState(false);

  const [globalData, setGlobalData] = useState([
    {title: 'Global Market Cap', data: 0},
    {title: '24H Volume', data: 0},
  ]);

  const SORTING_DATA = [
    {title: 'USD / BTC'},
    {title: 'All Coins'},
    {title: '24H'},
    {title: 'Sort By Market Cap'},
  ];

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/coins/markets',
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 50,
        page: 1,
        sparkline: false,
        price_change_percentage: '7d',
      },
    })
      .then(function (response) {
        setList(response.data);
        setTimeout(() => setRefreshing(false), 1000);
      })
      .catch(function (error) {
        setTimeout(() => setRefreshing(false), 1000);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/coins/markets',
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 50,
        page: 1,
        sparkline: false,
        price_change_percentage: '7d',
      },
    })
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/global',
    })
      .then(function (response) {
        setGlobalData([
          {
            title: 'Global Market Cap',
            data: response.data.data.total_market_cap.usd,
            percentChange:
              response.data.data.market_cap_change_percentage_24h_usd,
          },
          {title: '24H Volume', data: response.data.data.total_volume.usd},
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={list}
        ListHeaderComponent={
          <>
            <FlatList
              data={globalData}
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
            <View style={styles.headerRowContainer}>
              <Text style={[styles.headerRow, styles.rankCol]}>#</Text>
              <Text style={[styles.headerRow, styles.coinCol]}>COIN</Text>
              <Text style={[styles.headerRow, styles.priceCol]}>PRICE</Text>
              <Text style={[styles.headerRow, styles.percentageChangeCol]}>
                7D
              </Text>
              <Text style={[styles.headerRow, styles.marketCapCol]}>
                MARKET CAP
              </Text>
            </View>
          </>
        }
        ListHeaderComponentStyle={styles.alignItemsCenter}
        renderItem={({item}) => (
          <CryptoItem
            coin={item.symbol}
            price={item.current_price}
            changes={item.price_change_percentage_24h}
            marketCap={item.market_cap}
            rank={item.market_cap_rank}
            imageUrl={item.image}
          />
        )}
        onEndReached={() => {
          setPage(currentPage => {
            axios({
              method: 'get',
              url: 'https://api.coingecko.com/api/v3/coins/markets',
              params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 50,
                page: currentPage + 1,
                sparkline: false,
                price_change_percentage: '7d',
              },
            })
              .then(function (response) {
                setList(currentList => {
                  return currentList.concat(response.data);
                });
              })
              .catch(function (error) {
                console.log(error);
              });

            return currentPage + 1;
          });
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="white"
            colors="white"
          />
        }
        style={styles.flatlistContainer}
        contentContainerStyle={styles.alignItemsCenter}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CryptoList;

const styles = StyleSheet.create({
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
  cryptoRowContainer: {
    flexDirection: 'row',
    width: WIDTH,
    height: WIDTH * 0.125,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 0.05,
    borderBottomWidth: 0.25,
    borderBottomColor: 'darkgrey',
  },
  flatlistContainer: {height: HEIGHT, flexGrow: 0},
  alignItemsCenter: {
    alignItems: 'center',
  },
  headerRow: {
    color: 'darkgrey',
    fontSize: 11,
  },
  cryptoRow: {
    color: 'white',
    fontSize: 13,
  },
  rankCol: {
    width: WIDTH * 0.075,
  },
  coinCol: {
    width: WIDTH * 0.125,
    textAlign: 'center',
    alignItems: 'center',
  },
  priceCol: {
    width: WIDTH * 0.175,
    textAlign: 'right',
  },
  percentageChangeCol: {
    width: WIDTH * 0.175,
    textAlign: 'right',
    alignItems: 'flex-end',
  },
  marketCapCol: {
    width: WIDTH * 0.325,
    textAlign: 'right',
  },
  coinImage: {height: 15, width: 15, marginBottom: 2},
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
