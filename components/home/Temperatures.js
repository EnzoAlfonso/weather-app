// @flow

import type {HostComponent} from '../../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Rain from '../icons/Rain';
import WindSpeed from '../icons/WindSpeed';
import type {AbstractComponent, ElementRef} from 'react';

type Props = {
  feels_like: number,
  wind_speed: number,
  rain: number,
  min: number,
  max: number,
};

const Temperatures = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const rain = props.rain * 100;
  return (
    <View>
      <View style={styles.details}>
        <View style={styles.center}>
          <View>
            <Rain />
          </View>
          <Text>{`${rain} %`}</Text>
        </View>
        <View>
          <View style={styles.feelsLike}>
            <Text>{`Feels like: ${props.feels_like.toFixed(1)}˚`}</Text>
          </View>
        </View>
        <View style={styles.center}>
          <View>
            <WindSpeed />
          </View>
          <Text>{`${props.wind_speed.toFixed(1)} km/h`}</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Text>{`Min: ${props.min.toFixed(1)}˚ Max:${props.max.toFixed(
          1,
        )}˚`}</Text>
      </View>
    </View>
  );
};

export default Temperatures;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  feelsLike: {
    marginTop: 20,
    paddingLeft: 15,
  },
});
