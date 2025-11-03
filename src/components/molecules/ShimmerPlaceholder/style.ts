import {ColorValue, StyleSheet} from 'react-native';

export default (shimmerColors: ColorValue[]) => {
  return StyleSheet.create({
    container: {
      overflow: 'hidden',
    },
    linearGradient: {
      flex: 1,
    },
    displayNone: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    defaultShimmerStyle: {
      flex: 1,
      backgroundColor: shimmerColors[0],
    },
  });
};
