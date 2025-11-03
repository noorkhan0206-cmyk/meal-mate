import {StyleSheet} from 'react-native';
import {Colours} from '@theme/colors';
import {Font} from '@theme/fonts';

export default () => {
  return StyleSheet.create({
    header: {
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
    siteName: {
      fontSize: 18,
      fontFamily: Font.mediumPoppins,
      color: 'white',
    },
    iconBackground: {
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerIcon: {
      height: 30,
      width: 30,
      borderRadius: 30 / 2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    iconText: {
      fontSize: 16,
      fontFamily: Font.semiBoldPoppins,
      color: Colours.blueMain,
    },
    centerText: {
      justifyContent: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
    },
    image: {
      resizeMode: 'cover',
      height: 30,
      width: 30,
      borderRadius: 30 / 2,
    },
  });
};
