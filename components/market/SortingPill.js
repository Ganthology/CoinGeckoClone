import React from 'react';
import {View, Text} from 'react-native';
import {WIDTH} from '../../utils';

const SortingPill = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(81,81,81,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginRight: WIDTH * 0.025,
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default SortingPill;
