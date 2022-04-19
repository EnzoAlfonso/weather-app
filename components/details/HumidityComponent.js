// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Humidity from '../icons/Humidity';
import {Colors} from '../../constants/colors';

import Card from '../ui/Card';

type Props = {
  humidity: number,
};

const HumidityComponent = (props: Props): React$Element<any> => {
  return (
    <Card>
      <View style={styles.title}>
        <Humidity />
        <Text style={styles.titleText}>Humidity</Text>
      </View>
      <Text style={styles.percentage}>{`${props.humidity}%`}</Text>
    </Card>
  );
};

export default HumidityComponent;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    padding: 4,
  },
  percentage: {
    fontSize: 26,
    marginLeft: 10,
  },
  titleText: {
    color: Colors.primary,
  },
});
