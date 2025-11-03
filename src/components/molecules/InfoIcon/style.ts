import {StyleSheet} from 'react-native';
import {Colours} from '@theme/colors';

export default () => {
  return StyleSheet.create({
    iconContainer: {
      backgroundColor: Colours.white,
      width: 20,
      height: 20,
      borderRadius: 20 / 2,
    },
  });
};
