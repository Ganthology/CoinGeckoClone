import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WIDTH} from '../../utils';

const SortingPill = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default SortingPill;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(81,81,81,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: WIDTH * 0.025,
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
});
