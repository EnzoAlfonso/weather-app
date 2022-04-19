// @flow

import type {HostComponent} from '../../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SearchIcon from '../icons/SearchIcon';

import type {AbstractComponent, ElementRef} from 'react';
import {selectIcon} from '../../utils/icon-selector';

type Props = {
  icon: string,
  description: string,
  temp: number,
  city: string,
};

const Main = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const navigation = useNavigation();

  function handleSearch() {
    navigation.navigate('Search');
  }
  const icon = selectIcon(props.icon, 150, 150);

  return (
    <View>
      <View style={styles.searchIcon}>
        <Pressable onPress={handleSearch}>
          <SearchIcon />
        </Pressable>
      </View>
      <View style={styles.current}>
        <Text style={[styles.spacing]}>Today, 24th May</Text>
        <Text style={[styles.spacing, styles.bigFont]}>{props.city}</Text>
        <Text style={[styles.spacing]}>{props.description}</Text>
      </View>
      <View style={styles.center}>
        {icon}
        <Text style={styles.bigFont}>{`${props.temp.toFixed(1)}˚C`}</Text>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  searchIcon: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  current: {
    alignItems: 'center',
    marginTop: 15,
  },
  spacing: {
    marginBottom: 10,
  },
  bigFont: {
    fontSize: 32,
  },
  center: {
    alignItems: 'center',
  },
});
