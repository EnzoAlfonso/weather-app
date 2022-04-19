// @flow

import type {HostComponent} from '../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import type {AbstractComponent, ElementRef} from 'react';

import Details from '../components/home/Details';
import Main from '../components/home/Main';
import Temperatures from '../components/home/Temperatures';
import HourForecast from '../components/home/HourForecast';
import Button from '../components/ui/Button';
import useAxios from '../utils/useAxios';

type Props = {
  navigation: Object,
  route: Object,
};

const Home = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const params = props.route.params;
  const coordinates = {
    lat: params ? params.lat : -25.305,
    lon: params ? params.lon : -57.622,
  };

  const API_KEY = '2be3fec5ccee7a5820847ad708fe2526';
  const mainUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`;
  const secondUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`;

  const {response, error, loading} = useAxios(mainUrl);
  const {response: temp, error: tempError, loading: tempLoading} = useAxios(
    secondUrl,
  );

  function handleForecast() {
    const coords = {
      lat: response.lat,
      lon: response.lon,
    };
    props.navigation.navigate('Forecast', {
      city: temp.name,
      coords: coords,
      daily: response.daily,
    });
  }

  return (
    <View style={styles.container}>
      {response && temp && !loading && (
        <View>
          <Main
            icon={response.current.weather[0].description}
            description={response.current.weather[0].description}
            temp={response.current.temp}
            city={temp.name}
          />
          <Temperatures
            feels_like={response.current.feels_like}
            wind_speed={response.current.wind_speed}
            rain={response.daily[0].pop}
            min={temp.main.temp_min}
            max={temp.main.temp_max}
          />
          <View style={styles.button}>
            <Button onPress={handleForecast}>View week forecast</Button>
          </View>
          <View style={styles.hour}>
            <HourForecast forecast={response.hourly} />
          </View>
          <View style={styles.details}>
            <Details
              visibility={response.current.visibility}
              humidity={response.current.humidity}
              pressure={response.current.pressure}
              sunrise={response.current.sunrise}
              sunset={response.current.sunset}
            />
          </View>
        </View>
      )}
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
  button: {
    alignItems: 'center',
    marginVertical: 18,
  },
  hour: {
    marginVertical: 15,
  },
  details: {
    marginTop: 4,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
