import {StyleSheet} from 'react-native';
import {ColorsProps, Colours} from '@theme/colors';

export default (theme: ColorsProps, value: boolean) => {
  return StyleSheet.create({
    buttonStyle: {
      borderWidth: 2,
      borderColor: Colours.blueMain,
    },
    thumb: {
      height: '100%',
      aspectRatio: 1,
      backgroundColor: value ? Colours.white : Colours.blueMain,
    },
  });
};
