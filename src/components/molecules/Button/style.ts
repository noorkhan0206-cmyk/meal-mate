import {ColorValue, DimensionValue, StyleSheet} from 'react-native';
import {Colours} from '@theme/colors';
import {Font} from '@theme/fonts';

export default (
  fontSize?: number,
  isWaiting?: boolean,
  pressedBackgroundColor?: ColorValue,
  backgroundColor?: ColorValue,
  buttonWidth?: DimensionValue,
  borderColor?: ColorValue,
) => {
  return StyleSheet.create({
    buttonContainer: {
      width: buttonWidth,
      borderRadius: 100,
      paddingHorizontal: 10,
      paddingVertical: 7,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: borderColor,
      backgroundColor: backgroundColor,
    },
    base: {
      backgroundColor: Colours.greenMain,
    },
    pressed: {
      backgroundColor: pressedBackgroundColor,
    },
    buttonText: {
      color: 'white',
      fontFamily: Font.boldPoppins,
      fontSize: fontSize,
    },
    loadingIcon: {
      marginRight: isWaiting ? 5 : 0,
    },
    titleContainer: {
      flexGrow: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 5,
    },
  });
};
