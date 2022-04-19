// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Sunrise from '../icons/Sunrise';
import Sunset from '../icons/Sunset';
import {Colors} from '../../constants/colors';

import Card from '../ui/Card';

import {timeConverter} from '../../utils/time-converter';

type Props = {
  sunrise: number,
  sunset: number,
};

const Sun = (props: Props): React$Element<any> => {
  const sunriseTimestr = timeConverter(props.sunrise);
  const sunsetTimestr = timeConverter(props.sunset);
  return (
    <Card>
      <View style={[styles.title]}>
        <Sunrise />
        <Text style={styles.titleText}>Sunrise</Text>
      </View>
      <Text style={[styles.description]}>{sunriseTimestr}</Text>
      <View style={[styles.title]}>
        <Sunset />
        <Text style={styles.titleText}>Sunset</Text>
      </View>
      <Text style={styles.description}>{sunsetTimestr}</Text>
    </Card>
  );
};

export default Sun;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
  },
  titleText: {
    color: Colors.primary,
    marginBottom: 4,
  },
  description: {
    fontSize: 18,
    marginBottom: 4,
  },
});
