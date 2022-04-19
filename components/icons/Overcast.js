import React from 'react';
import Svg, {Path, Defs, Stop, LinearGradient} from 'react-native-svg';

const Overcast = ({width, height}) => {
  return (
    <Svg
      width={width ? width : '89'}
      height={height ? height : '67'}
      viewBox="0 0 89 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M59.1724 1V7.55611M79.5568 9.32079L74.8529 13.9565M88 29.4098H81.3475M79.5568 49.4988L74.8529 44.8631M43.4919 13.9565L38.788 9.32079"
        stroke="#FFDB5B"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <Path
        d="M59.1724 43.6147C67.2483 43.6147 73.7951 37.0679 73.7951 28.992C73.7951 20.9161 67.2483 14.3693 59.1724 14.3693C51.0965 14.3693 44.5497 20.9161 44.5497 28.992C44.5497 37.0679 51.0965 43.6147 59.1724 43.6147Z"
        fill="#FFDB5B"
      />
      <Path
        d="M12.7683 39.8662C13.276 39.791 13.7462 39.5579 14.1108 39.2007C14.4755 38.8436 14.7155 38.3809 14.7962 37.8798C16.7756 25.5344 25.8369 18.1001 36.4028 18.1001C46.2149 18.1001 52.7522 24.4505 55.3505 31.1427C55.5034 31.5398 55.7597 31.8901 56.0933 32.158C56.427 32.426 56.8264 32.6022 57.251 32.6688C65.7313 34 72.8056 39.5694 72.8056 49.2823C72.8056 59.1767 64.615 66.0728 54.6042 66.0728H15.1678C6.82552 66.0728 0 61.9591 0 52.8803C0 44.7204 6.65716 40.7657 12.7683 39.8662Z"
        fill="grey"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_48_2"
          x1="65.6354"
          y1="27.3675"
          x2="36.7863"
          y2="60.411"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#A5DEFF" />
          <Stop offset="1" stop-color="#D8F1FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Overcast;
