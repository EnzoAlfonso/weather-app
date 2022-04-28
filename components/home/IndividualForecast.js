import type {HostComponent} from '../../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {selectIcon} from '../../utils/icon-selector';
import {timeConverter, getHours} from '../../utils/time-converter';
import type {AbstractComponent, ElementRef} from 'react';

const HourForecast = data => {
  const type = data.data.weather[0].description;
  const icon = selectIcon(type, 80, 50);
  const time = getHours(data.data.dt);
  const temp = data.data.temp.toFixed(1);

  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{`${time} h`}</Text>
      {icon}
      <Text style={styles.temp}>{`${temp}˚`}</Text>
    </View>
  );
};

export default HourForecast;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  hour: {
    marginBottom: 8,
  },
  temp: {
    marginTop: 8,
  },
});
