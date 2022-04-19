// @flow

import type {HostComponent} from '../../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {ScrollView, StyleSheet, View, FlatList} from 'react-native';
import IndividualForecast from './IndividualForecast';
import type {AbstractComponent, ElementRef} from 'react';
import {getHours} from '../../utils/time-converter';

type Props = {
  forecast: Object[],
};

const HourForecast = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const now = getHours(props.forecast[0].dt);
  const last = 24 - now;
  const array: Object[] = props.forecast.slice(0, last);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        horizontal={true}
        data={array}
        keyExtractor={item => {
          return item.weather[0].id;
        }}
        renderItem={item => <IndividualForecast data={item.item} />}
      />
    </View>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
});
