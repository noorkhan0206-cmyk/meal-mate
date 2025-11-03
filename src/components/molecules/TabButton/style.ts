import {StyleSheet} from 'react-native';
import {Colours} from '@theme/colors';
import {Font} from '@theme/fonts';

export default () => {
  return StyleSheet.create({
    buttonContainer: {
      height: 80,
      borderColor: Colours.blueMain,
      borderWidth: 5,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontFamily: Font.semiBoldPoppins,
      fontSize: 15,
      color: Colours.white,
    },
    subTitle: {
      fontFamily: Font.regularPoppins,
      fontSize: 14,
      color: Colours.white,
    },
  });
};
