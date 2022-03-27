import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {WIDTH, LIGHTGREEN, LIGHTRED} from '../../utils';
import {GreenIndicator, RedIndicator} from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import PercentIndicator from './PercentIndicator';

const InfoCard = ({title, data, percentChange}) => {
  const [infoTitle, setTitle] = useState(title);
  const [infoData, setData] = useState(data);
  const [infoPercent, setPercent] = useState(percentChange);

  useEffect(() => {
    setTitle(title);
    setData(data);
    setPercent(percentChange);
  }, [title, data, percentChange]);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#18f26c', '#18ceaf']} style={styles.neonBar} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{infoTitle}</Text>
        <View style={styles.dataContainer}>
          <Text style={styles.data}>
            {`$${Number(infoData.toFixed(0)).toLocaleString('en-US')}`}{' '}
          </Text>
          {percentChange && (
            <PercentIndicator percentChange={infoPercent.toFixed(1)} />
          )}
        </View>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: WIDTH * 0.6,
    height: WIDTH * 0.15,
    marginTop: 15,
    marginRight: WIDTH * 0.05 - 10,
  },
  neonBar: {
    width: 10,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginRight: -10,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(24, 242, 108, 0.1)',
    width: WIDTH * 0.6 - 10,
    borderRadius: 10,
    paddingLeft: 25,
  },
  title: {color: '#959ea0', fontSize: 12},
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  data: {color: 'white', fontSize: 14},
  indicatorImage: {height: 7, width: 7},
  positivePercent: {color: LIGHTGREEN, fontSize: 14},
  negativePercent: {color: LIGHTRED, fontSize: 14},
});
