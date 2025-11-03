import {StyleSheet} from 'react-native';
import {ColorsProps, Colours} from '@theme/colors';
import {Font} from '@theme/fonts';

export default (theme: ColorsProps) => {
  return StyleSheet.create({
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 5,
    },
    title: {
      fontSize: 16,
      marginHorizontal: 10,
      fontFamily: Font.mediumPoppins,
      color: theme.colors.text,
    },
    calendarContainer: {
      marginVertical: 20,
    },
    dateText: {
      fontFamily: Font.regularPoppins,
      fontSize: 16,
      color: theme.colors.text,
      marginLeft: 10,
    },
    container: {
      paddingHorizontal: 10,
      marginTop: 10,
      flexDirection: 'row',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderColor: Colours.blueMain,
      marginHorizontal: 20,
    },
    iconContainer: {
      backgroundColor: theme.colors.greyIconContainer,
      height: 25,
      width: 25,
      borderRadius: 25 / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
