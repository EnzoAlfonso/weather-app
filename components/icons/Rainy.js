import React from 'react';
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const Rainy = ({width, height}) => {
  return (
    <Svg
      width={width ? width : '57'}
      height={height ? height : '61'}
      viewBox="0 0 57 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.71739 17.0422C10.1527 16.9747 10.5556 16.7715 10.8687 16.4617C11.1819 16.1518 11.3892 15.7511 11.4613 15.3165C13.036 5.75281 20.0091 0 28.1324 0C35.6773 0 40.7164 4.91665 42.7456 10.125C42.876 10.4589 43.091 10.753 43.3697 10.9784C43.6483 11.2038 43.9808 11.3527 44.3345 11.4105C50.8466 12.472 56.2647 16.8208 56.2647 24.3814C56.2647 32.1178 49.935 37.5098 42.1985 37.5098H11.7218C5.27482 37.5098 0 34.2928 0 27.1946C0 20.8818 5.03648 17.7885 9.71739 17.0422V17.0422Z"
        fill="grey"
      />
      <Path
        d="M44.3298 46.0348L36.1057 57.9697M13.4895 46.0348L9.37744 52.0023L13.4895 46.0348ZM23.7696 46.0348L15.5455 57.9697L23.7696 46.0348ZM34.0497 46.0348L29.9376 52.0023L34.0497 46.0348Z"
        stroke="#9AC6DF"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_6_92"
          x1="56.2647"
          y1="-6.39372"
          x2="8.52496"
          y2="37.5098"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#2C4350" />
          <Stop offset="1" stop-color="#91A5B0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Rainy;
