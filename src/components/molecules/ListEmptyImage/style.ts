import {StyleSheet} from 'react-native';
import {scale, vs, windowWidth} from '@services/dimension';
import {ColorsProps} from '@theme/colors';
import {Font, FontSize} from '@theme/fonts';

export default (theme: ColorsProps) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: windowWidth,
      padding: scale(20),
    },
    image: {
      height: vs(220),
      resizeMode: 'contain',
    },
    text: {
      fontSize: FontSize.Thin,
      fontFamily: Font.regularPoppins,
      color: theme.colors.text,
      textAlign: 'center',
      justifyContent: 'center',
      maxWidth: windowWidth * 0.9,
    },
  });
};
