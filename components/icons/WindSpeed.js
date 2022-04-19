import React from 'react';
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const WindSpeed = () => {
  return (
    <Svg
      width="30"
      height="23"
      viewBox="0 0 30 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6 9H25.0203C28.0039 9 29.589 3.93103 25.673 2"
        stroke="#91A5B0"
        stroke-width="3"
        stroke-linecap="round"
      />
      <Path
        d="M23 14L4.84421 14C1.99625 14 0.483264 19.069 4.22122 21"
        stroke="#91A5B0"
        stroke-width="3"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default WindSpeed;
