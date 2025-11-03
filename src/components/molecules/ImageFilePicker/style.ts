import {StyleSheet} from 'react-native';
import {ColorsProps, Colours} from '@theme/colors';
import {Font} from '@theme/fonts';

export default (theme: ColorsProps) => {
  return StyleSheet.create({
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    title: {
      fontSize: 16,
      fontFamily: Font.semiBoldPoppins,
      color: theme.colors.text,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      gap: 10,
    },
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
    listContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 30,
      borderBottomWidth: 0.5,
      borderColor: theme.colors.border,
      width: '100%',
      paddingHorizontal: 25,
      padding: 10,
    },
    listLabel: {
      fontFamily: Font.mediumPoppins,
      fontSize: 14,
      color: theme.colors.text,
    },
  });
};
