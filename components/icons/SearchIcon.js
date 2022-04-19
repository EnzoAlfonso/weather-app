import React from 'react';
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const SearchIcon = ({width, height}) => {
  return (
    <Svg
      width={width ? width : '22'}
      height={height ? height : '22'}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.18177 1C7.56357 1 5.98171 1.47985 4.63622 2.37888C3.29074 3.2779 2.24206 4.55572 1.6228 6.05074C1.00354 7.54576 0.841519 9.19084 1.15721 10.778C1.47291 12.3651 2.25215 13.8229 3.39639 14.9672C4.54063 16.1114 5.99848 16.8906 7.58559 17.2063C9.17269 17.522 10.8178 17.36 12.3128 16.7407C13.8078 16.1215 15.0856 15.0728 15.9847 13.7273C16.8837 12.3818 17.3635 10.8 17.3635 9.18177C17.3634 7.01187 16.5013 4.93089 14.967 3.39654C13.4327 1.86219 11.3517 1.00014 9.18177 1Z"
        stroke="#2C4350"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <Path
        d="M15.2859 15.286L21 21"
        stroke="#2C4350"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
