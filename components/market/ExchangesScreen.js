import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import {WIDTH} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios';

const ExchangeItem = ({rank, title, volume, trust}) => {
  const formattedVolume = Number(volume.toFixed(0)) * 40000;

  return (
    <View style={styles.itemContainer}>
      <View style={[styles.rowContainer, styles.rankCol]}>
        <Text style={styles.whiteText}>{rank}</Text>
      </View>
      <Text style={[styles.exchangeCol, styles.whiteText]}>{title}</Text>
      <View style={[styles.volumeCol]}>
        <Text style={styles.whiteText}>
          {`$${formattedVolume.toLocaleString('en-US')}`}
        </Text>
      </View>
      <Text style={[styles.whiteText, styles.trustCol]}>{`${trust}/10`}</Text>
    </View>
  );
};

const ExchangesScreen = () => {
  const [exchangeList, setExchangeList] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: 'get',
      url: 'https://api.coingecko.com/api/v3/exchanges',
      params: {
        per_page: 40,
        page: 1,
      },
    })
      .then(function (response) {
        setExchangeList(response.data);
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
        <Text style={[styles.headerRow, styles.rankCol]}>#</Text>
        <Text style={[styles.headerRow, styles.exchangeCol]}>EXCHANGE</Text>
        <Text style={[styles.headerRow, styles.volumeCol]}>
          REPORTED VOLUME
        </Text>
        <Text style={[styles.headerRow, styles.trustCol]}>TRUST</Text>
      </View>
      <FlatList
        data={exchangeList}
        renderItem={({item}) => (
          <ExchangeItem
            rank={item.trust_score_rank}
            title={item.name}
            volume={item.trade_volume_24h_btc}
            trust={item.trust_score}
            key={item.id}
          />
        )}
        style={styles.infoCardContainer}
        keyExtractor={item => item.id}
      />
    </LinearGradient>
  );
};

export default ExchangesScreen;

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
  headerRow: {
    color: 'darkgrey',
    fontSize: 11,
  },
  cryptoRow: {
    color: 'white',
    fontSize: 13,
  },
  rankCol: {
    width: WIDTH * 0.1,
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  exchangeCol: {
    width: WIDTH * 0.3,
    textAlign: 'left',
  },
  volumeCol: {
    width: WIDTH * 0.3,
    textAlign: 'right',
    alignItems: 'flex-end',
  },
  trustCol: {
    width: WIDTH * 0.2,
    textAlign: 'right',
  },
  whiteText: {
    color: 'white',
  },
});
