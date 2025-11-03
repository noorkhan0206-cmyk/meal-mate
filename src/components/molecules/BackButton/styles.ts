import {StyleSheet} from 'react-native';

export default () => {
  return StyleSheet.create({
    backStyle: {
      flex: 1,
      flexDirection: 'row',
    },
    backImageStyle: {
      marginRight: 8,
      marginLeft: 18,
      justifyContent: 'center',
    },
    iconColor: {
      color: 'white',
    },
  });
};
