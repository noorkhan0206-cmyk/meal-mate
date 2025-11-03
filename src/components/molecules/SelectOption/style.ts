import {StyleSheet} from 'react-native';
import {ColorsProps} from '@theme/colors';
import {Font, FontSize} from '@theme/fonts';

export default (theme: ColorsProps, windowWidth: number) => {
  return StyleSheet.create({
    container: {
      width: windowWidth - 20,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    text: {
      fontFamily: Font.regularPoppins,
      fontSize: FontSize.Base,
      color: theme.colors.text,
    },
    iconContainer: {
      justifyContent: 'center',
    },
  });
};
