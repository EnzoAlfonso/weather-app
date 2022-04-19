// @flow

import type {HostComponent} from '../../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import VisibilityComponent from '../details/VisibilityComponent';
import HumidityComponent from '../details/HumidityComponent';
import PressureComponent from '../details/PressureComponent';
import Sun from '../details/Sun';
import type {AbstractComponent, ElementRef} from 'react';

type Props = {
  visibility: number,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number,
};

const Details = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  return (
    <View>
      <ScrollView horizontal={true} contentContainerStyle={styles.container}>
        <VisibilityComponent visibility={props.visibility} />
        <HumidityComponent humidity={props.humidity} />
        <PressureComponent pressure={props.pressure} />
        <Sun sunrise={props.sunrise} sunset={props.sunset} />
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});
