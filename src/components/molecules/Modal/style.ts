import {StyleSheet} from 'react-native';
import {ColorsProps} from '@theme/colors';
import {Font} from '@theme/fonts';

export default (
  windowHeight: number,
  windowWidth: number,
  theme: ColorsProps,
) => {
  return StyleSheet.create({
    subContainer: {
      width: windowWidth * 0.8,
      height: windowHeight * 0.5,
      borderRadius: 10,
      backgroundColor: theme.colors.card,
      padding: 5,
      position: 'absolute',
      marginHorizontal: windowWidth * 0.1,
      marginVertical: windowHeight * 0.15,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      opacity: theme.dark ? 0.5 : 0.1,
    },
    header: {
      alignItems: 'center',
    },
    message: {
      alignItems: 'center',
    },
    headerText: {
      fontSize: 16,
      marginTop: 10,
      marginHorizontal: 10,
      fontFamily: Font.boldPoppins,
    },
    messageText: {
      fontSize: 14,
      lineHeight: 25,
      marginTop: 20,
      marginBottom: '5%',
      marginHorizontal: 10,
      fontFamily: Font.regularPoppins,
    },
    buttonContainer: {
      width: windowWidth * 0.6,
      borderRadius: 20,
      padding: 3,
      alignItems: 'center',
      borderColor: '#0399ab',
      borderWidth: 5,
      alignSelf: 'center',
    },
  });
};
