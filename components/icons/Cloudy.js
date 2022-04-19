import React from 'react';
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const Cloudy = ({width, height}) => {
  return (
    <Svg
      width={width ? width : '63'}
      height={height ? height : '49'}
      viewBox="0 0 63 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.6564 17.8652C15.0652 17.8034 15.4438 17.6121 15.7374 17.319C16.031 17.0258 16.2243 16.6461 16.2893 16.2348C17.8832 6.10189 25.1795 0 33.6875 0C41.5884 0 46.8525 5.21227 48.9447 10.7051C49.0678 11.0311 49.2742 11.3185 49.5429 11.5385C49.8116 11.7584 50.1331 11.903 50.475 11.9577C57.3036 13.0504 63 17.6215 63 25.5938C63 33.7148 56.4047 39.375 48.3438 39.375H16.5885C9.87109 39.375 4.375 35.9986 4.375 28.5469C4.375 21.8494 9.73552 18.6035 14.6564 17.8652Z"
        fill="grey"
      />
      <Path
        d="M8.28647 31.7921C8.61595 31.7427 8.92113 31.5897 9.15777 31.3552C9.39441 31.1207 9.55021 30.8169 9.60258 30.4878C10.8872 22.3815 16.7678 17.5 23.625 17.5C29.9929 17.5 34.2356 21.6698 35.9218 26.0641C36.0211 26.3248 36.1874 26.5548 36.4039 26.7308C36.6205 26.9067 36.8797 27.0224 37.1552 27.0662C42.6589 27.9403 47.25 31.5972 47.25 37.975C47.25 44.4719 41.9344 49 35.4375 49H9.84375C4.42969 49 0 46.2989 0 40.3375C0 34.9795 4.32042 32.3828 8.28647 31.7921Z"
        fill="grey"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_6_113"
          x1="49.0608"
          y1="3.37983"
          x2="20.4868"
          y2="39.2697"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#787878" />
          <Stop offset="1" stop-color="#B7B5B5" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_6_113"
          x1="36.0154"
          y1="20.2039"
          x2="13.1949"
          y2="49.0811"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#ACACAC" />
          <Stop offset="1" stop-color="#DEDEDE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Cloudy;
