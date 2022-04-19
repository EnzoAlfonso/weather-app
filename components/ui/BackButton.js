import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const BackButton = ({buttonBackground}) => {
  const navigation = useNavigation();

  styles.container['backgroundColor'] = buttonBackground;

  function handlePress() {
    navigation.goBack();
  }
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.text}>{'<<'}</Text>
      </View>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 18,
  },
});
