import {StyleSheet} from 'react-native';
import {Font} from '@theme/fonts';

export default (windowWidth: number) => {
  return StyleSheet.create({
    error: {
      fontSize: 16,
      marginHorizontal: 10,
      fontFamily: Font.semiBoldPoppins,
      color: 'white',
      flexShrink: 1,
    },
    buttonRow: {
      alignItems: 'flex-end',
      marginRight: 20,
    },
    messageContainer: {
      width: windowWidth - 50,
    },
    errorContainer: {
      backgroundColor: 'red',
    },
    handleStyle: {
      backgroundColor: 'white',
      display: 'none',
    },
  });
};
