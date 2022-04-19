// @flow
import type {HostComponent} from '../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import type {AbstractComponent, ElementRef} from 'react';

import MapView, {Marker} from 'react-native-maps';
import DailyForecast from '../components/forecast/DailyForecast';
import {Colors} from '../constants/colors';
import BackButton from '../components/ui/BackButton';
import {getDate, getMonth} from '../utils/format-day';

type Props = {
  route: Object,
};

const Forecast = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const coords = props.route.params.coords;
  const markerCoords = {
    latitude: coords.lat,
    longitude: coords.lon,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const date = new Date();
  const today = getDate(date.getDate());
  const month = getMonth(date.getMonth());

  return (
    <View style={styles.outterContainer}>
      <View>
        <View style={styles.return}>
          <BackButton backgroundColor={Colors.mainBackground} />
        </View>
        <View style={[styles.center, styles.container]}>
          <View style={[styles.center, styles.title]}>
            <Text style={{fontSize: 18}}>{`Today, ${today} ${month}`}</Text>
            <Text style={{fontSize: 32}}>{props.route.params.city}</Text>
          </View>

          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: coords.lat ? coords.lat : 37.78825,
                longitude: coords.lon ? coords.lon : -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker coordinate={markerCoords} />
            </MapView>
          </View>
          <View style={styles.forecast}>
            <Text style={styles.text}>Week Forecast</Text>
          </View>
          <View>
            <DailyForecast daily={props.route.params.daily} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  outterContainer: {
    marginTop: 60,
  },
  container: {
    marginTop: 50,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    height: 169,
    width: 325,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 24,
  },
  title: {
    marginTop: 100,
    marginBottom: 10,
  },
  forecast: {
    marginVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'gray',
  },
  scroll: {
    width: '100%',
  },
  return: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 12,
    marginBottom: 30,
  },
});
