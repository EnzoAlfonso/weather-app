import React from 'react';

import Cloudy from '../components/icons/Cloudy';
import Sunny from '../components/icons/Sunny';
import Overcast from '../components/icons/Overcast';
import Rainy from '../components/icons/Rainy';
import Storm from '../components/icons/Storm';

export function selectIcon(type, width, height) {
  switch (type) {
    case 'overcast clouds':
      return <Cloudy width={width} height={height} />;
      break;
    case 'clear sky':
      return <Sunny width={width} height={height} />;
      break;
    case 'broken clouds':
      return <Overcast width={width} height={height} />;
      break;
    case 'scattered clouds':
      return <Overcast width={width} height={height} />;
      break;
    case 'few clouds':
      return <Overcast width={width} height={height} />;
      break;
    case 'light rain':
      return <Rainy width={width} height={height} />;
      break;
    case 'moderate rain':
      return <Rainy width={width} height={height} />;
      break;
    case 'heavy intensity rain':
      return <Storm width={width} height={height} />;
      break;
    case 'haze':
      return <Cloudy width={width} height={height} />;
      break;
    default:
      break;
  }
}
