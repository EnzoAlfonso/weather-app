// @flow

import type {HostComponent} from '../../node_modules/react-native/Libraries/Renderer/shims/ReactNativeTypes';
import type {ViewProps} from '../../node_modules/react-native/Libraries/Components/View/ViewPropTypes';
import React from 'react';
import Day from './Day';
import {View, FlatList} from 'react-native';
import type {AbstractComponent, ElementRef} from 'react';
import {modifyDays} from '../../utils/format-day';

type Props = {
  daily: Object[],
};

const DailyForecast = (
  props: Props,
): React$Element<
  AbstractComponent<ViewProps, ElementRef<HostComponent<ViewProps>>>,
> => {
  const daily = modifyDays(props.daily);
  return (
    <View>
      <FlatList
        data={daily}
        renderItem={item => {
          return <Day day={item.item} index={item.index} />;
        }}
      />
    </View>
  );
};

export default DailyForecast;
