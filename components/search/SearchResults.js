import React from 'react';
import {View, FlatList} from 'react-native';

import SearchItem from './SearchItem';

const SearchResults = ({array}) => {
  return (
    <View>
      <FlatList data={array} renderItem={item => <SearchItem data={item} />} />
    </View>
  );
};

export default SearchResults;
