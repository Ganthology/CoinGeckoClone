import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {GreenIndicator, RedIndicator} from '../../assets/images';
import {LIGHTRED, LIGHTGREEN} from '../../utils';

const PercentIndicator = ({percentChange}) => {
  const formattedPercentChange = Math.abs(percentChange);

  return (
    <View style={styles.container}>
      <Image
        source={percentChange >= 0 ? GreenIndicator : RedIndicator}
        style={styles.indicatorImage}
      />
      <Text
        style={
          percentChange >= 0 ? styles.positivePercent : styles.negativePercent
        }>
        {` ${formattedPercentChange.toFixed(1)}%`}
      </Text>
    </View>
  );
};

export default PercentIndicator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicatorImage: {height: 7, width: 7},
  positivePercent: {color: LIGHTGREEN, fontSize: 14},
  negativePercent: {color: LIGHTRED, fontSize: 14},
});
