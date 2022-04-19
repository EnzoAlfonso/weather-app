// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Visibility from '../icons/Visibility';
import {Colors} from '../../constants/colors';

import Card from '../ui/Card';

type Props = {
  visibility: number,
};

const VisibilityComponent = (props: Props): React$Element<any> => {
  const visible = (props.visibility / 1000).toFixed(1);
  return (
    <Card>
      <View style={styles.title}>
        <Visibility />
        <Text style={styles.description}>Visibility</Text>
      </View>
      <Text style={styles.speed}>{`${visible} km`}</Text>
      <Text style={styles.description}>It's clear now</Text>
    </Card>
  );
};

export default VisibilityComponent;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    padding: 4,
  },
  speed: {
    fontSize: 26,
    marginBottom: 4,
  },
  description: {
    color: Colors.primary,
  },
});
