import {StyleSheet} from 'react-native';
import {Font} from '@theme/fonts';

export default (textColor: string, iconColor: string) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: 5,
    },
    text: {
      fontFamily: Font.regularPoppins,
      fontSize: 14,
      color: textColor,
    },
    textContainer: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    iconColour: {
      color: iconColor,
    },
  });
};
