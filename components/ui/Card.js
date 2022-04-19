import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 116,
    height: 116,
    borderWidth: 1,
    borderColor: '#a39d9b',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 4,
    elevation: 2,

    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
