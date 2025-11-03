import {StyleSheet} from 'react-native';
import {ColorsProps} from '@theme/colors';
import {Font} from '@theme/fonts';

export default (theme: ColorsProps) => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginRight: 20,
      height: 70,
    },
    buttonContainer: {
      marginVertical: '2%',
      borderRadius: 20,
    },
    siteName: {
      fontFamily: Font.regularPoppins,
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      color: theme.colors.headerText,
    },
    topContainer: {
      height: 55,
      justifyContent: 'center',
      backgroundColor: theme.colors.headerBackground,
    },
    iconBackground: {
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    backImageStyle: {
      justifyContent: 'center',
    },
  });
};
