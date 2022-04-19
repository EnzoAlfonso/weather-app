import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import SearchIcon from '../icons/SearchIcon';
import {Colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const SearchItem = ({data}) => {
  const text = `${data.item.LocalizedName}, ${data.item.AdministrativeArea.LocalizedName}, ${data.item.Country.ID}`;
  const navigation = useNavigation();

  async function pressed() {
    const apiKey = 'w7X3il4U9TSXlbgjRIsizB87GCPM2SP2';
    const url = `https://dataservice.accuweather.com/locations/v1/${data.item.Key}?apikey=${apiKey}`;
    const url2 = `https://dataservice.accuweather.com/locations/v1/257012?apikey=w7X3il4U9TSXlbgjRIsizB87GCPM2SP2`;
    const response = await axios.get(url);
    navigation.navigate('Home', {
      lat: response.data.GeoPosition.Latitude,
      lon: response.data.GeoPosition.Longitude,
    });
  }
  return (
    <Pressable key={data.key} onPress={pressed}>
      <View style={styles.container}>
        <SearchIcon width={18} height={18} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 30,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
});
