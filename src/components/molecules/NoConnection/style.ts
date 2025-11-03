import {StyleSheet} from 'react-native';
import {Colours} from '@theme/colors';
import {Font, FontSize} from '@theme/fonts';

export default (windowWidth: number, windowHeight: number) => {
  return StyleSheet.create({
    noConnectionContainer: {
      flex: 1,
      backgroundColor: Colours.white,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
    noConnectionImage: {
      height: windowHeight * 0.3,
      width: windowWidth,
      resizeMode: 'contain',
    },
    noConnectionTitle: {
      fontSize: FontSize.H2,
      fontFamily: Font.boldPoppins,
      color: Colours.blueDarkerMain,
    },
    noConnectionDescription: {
      fontSize: FontSize.Thin,
      fontFamily: Font.regularPoppins,
      color: Colours.lightGrey,
      textAlign: 'center',
      maxWidth: windowWidth * 0.9,
    },
  });
};
