import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {HEIGHT, WIDTH} from '../../utils';
import axios from 'axios';
import InfoCard from './InfoCard';
import SortingPill from './SortingPill';
import PercentIndicator from './PercentIndicator';

const CryptoItem = ({rank, coin, price, changes, marketCap}) => {
  return (
    <View style={styles.cryptoRowContainer}>
      <Text style={[styles.cryptoRow, styles.rankCol]}>{rank}</Text>
      <Text style={[styles.cryptoRow, styles.coinCol]}>
        {coin.toUpperCase()}
      </Text>
      <Text
        style={[styles.cryptoRow, styles.priceCol]}>{`$${price.toLocaleString(
        'en-US',
      )}`}</Text>
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
  // let page = 1;

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
        // console.log(response.data);
        setList(response.data);
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
            changes={item.price_change_percentage_7d_in_currency}
            marketCap={item.market_cap}
            rank={item.market_cap_rank}
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
                // console.log(response.data);
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
