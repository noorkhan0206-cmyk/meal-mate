import {StyleSheet} from 'react-native';
import {ColorsProps, Colours} from '@theme/colors';

export default (theme: ColorsProps, windowWidth: number) => {
  return StyleSheet.create({
    container: {
      marginHorizontal: 10,
      marginVertical: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Colours.grayVeryLight,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    input: {
      paddingLeft: 10,
      color: theme.colors.text,
      paddingHorizontal: 15,
      height: 35,
      width: windowWidth - 50,
    },
    iconContainer: {
      justifyContent: 'center',
      marginLeft: 10,
    },
  });
};
