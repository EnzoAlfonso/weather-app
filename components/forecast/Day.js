import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../constants/colors';

import {selectIcon} from '../../utils/icon-selector';
import {getDay} from '../../utils/format-day';

const Day = ({day, index}) => {
  const icon = selectIcon(day.weather[0].description, 40, 40);
  const temp = `${day.temp.max.toFixed(0)}˚/ ${day.temp.min.toFixed(0)}˚`;
  const dayOfWeek = index === 0 ? 'Today' : getDay(day.day);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{dayOfWeek}</Text>
      </View>
      <View style={[styles.container, styles.icon]}>{icon}</View>
      <View style={[styles.container]}>
        <Text style={styles.text}>{temp}</Text>
      </View>
      <View style={styles.end}></View>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: 330,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 16,
  },
  container: {
    width: 100,
    padding: 6,
  },
  day: {
    justifyContent: 'flex-start',
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 45,
  },
  temp: {
    justifyContent: 'center',
  },
});
