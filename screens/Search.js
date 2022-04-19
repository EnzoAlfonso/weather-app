// @flow

import type {HostComponent} from '../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import type {AbstractComponent, ElementRef} from 'react';

import {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Input from '../components/search/Input';
import SearchResults from '../components/search/SearchResults';

import BackButton from '../components/ui/BackButton';

type Props = {
  navigation: Object,
};

const Search = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState();

  const apiKey = 'w7X3il4U9TSXlbgjRIsizB87GCPM2SP2';
  const url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${search}`;

  useEffect(() => {
    async function fetchData() {
      if (search.length > 0) {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      }
    }
    fetchData();
  }, [search]);

  return (
    <View>
      <View style={styles.return}>
        <BackButton />
      </View>
      <View>
        <Input search={search} setSearch={setSearch} />
        {!data && (
          <View style={styles.innerContainer}>
            <Text style={styles.text}>Nothing to show</Text>
          </View>
        )}
        {data && <SearchResults array={data} />}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 32,
  },
  return: {
    alignItems: 'flex-start',
    marginTop: 60,
    marginLeft: 12,
    marginBottom: 0,
  },
});
