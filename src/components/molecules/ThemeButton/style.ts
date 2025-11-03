import {StyleSheet} from 'react-native';
import {Font} from '@theme/fonts';

export default () => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#f2f2f2',
      flexDirection: 'row',
      borderRadius: 8,
      padding: 10,
      marginVertical: 10,
      alignItems: 'center',
    },
    iconContainer: {
      marginRight: 20,
    },
    text: {
      fontFamily: Font.regularComfortaa,
      fontSize: 16,
    },
  });
};
