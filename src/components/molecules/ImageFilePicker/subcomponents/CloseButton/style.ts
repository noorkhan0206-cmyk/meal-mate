import {StyleSheet} from 'react-native';
import {Colours} from '@theme/colors';

export default () => {
  return StyleSheet.create({
    iconBackground: {
      height: 30,
      width: 30,
      borderRadius: 15,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      backgroundColor: Colours.blueMain,
    },
  });
};
