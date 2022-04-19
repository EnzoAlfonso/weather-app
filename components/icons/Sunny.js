import React from 'react';
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const Sunny = ({width, height}) => {
  return (
    <Svg
      width={width ? width : '63'}
      height={height ? height : '62'}
      viewBox="0 0 63 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M31.5 3V9.48161M31.5 52.6923V59.1739M51.6528 11.2262L47.0024 15.8093M15.9976 46.3646L11.3472 50.9477M60 31.087H53.4231M9.57692 31.087H3M51.6528 50.9477L47.0024 46.3646M15.9976 15.8093L11.3472 11.2262"
        stroke="#FFDB5B"
        stroke-width="5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M31.5 45.1304C39.4841 45.1304 45.9565 38.658 45.9565 30.6739C45.9565 22.6898 39.4841 16.2174 31.5 16.2174C23.5159 16.2174 17.0435 22.6898 17.0435 30.6739C17.0435 38.658 23.5159 45.1304 31.5 45.1304Z"
        fill="#FFDB5B"
      />
    </Svg>
  );
};

export default Sunny;
