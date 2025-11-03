import {StyleSheet} from 'react-native';
import {scale} from '@services/dimension';
import {ColorsProps, Colours} from '@theme/colors';
import {Font, FontSize} from '@theme/fonts';

export default (windowWidth: number, theme: ColorsProps) => {
  return StyleSheet.create({
    dropDownStyle: {
      width: windowWidth - 40,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: Colours.greenMain,
      backgroundColor: theme.colors.background,
      height: 40,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    dropDownTextStyle: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    dropTextStyle: {
      fontFamily: Font.mediumPoppins,
      color: theme.colors.text,
      fontSize: FontSize.Base,
    },
    buttonStyle: {
      color: theme.colors.text,
      textAlign: 'left',
      fontFamily: Font.regularPoppins,
      width: windowWidth / 1.5,
    },
    title: {
      fontFamily: Font.regularPoppins,
      fontSize: FontSize.Base,
      lineHeight: FontSize.Base + 3,
      marginBottom: 5,
      color: theme.colors.text,
    },
    container: {
      marginBottom: 5,
    },
    errorText: {
      fontFamily: Font.semiBoldPoppins,
      fontSize: 16,
      color: 'white',
    },
    errorContainer: {
      paddingHorizontal: 5,
      paddingVertical: 5,
      backgroundColor: 'red',
      borderRadius: 5,
    },
    modalContainer: {
      gap: 10,
      padding: 10,
      flex: 1,
    },
    headerContainer: {
      gap: 15,
    },
    modalTitle: {
      fontSize: 16,
      fontFamily: Font.boldPoppins,
      color: theme.colors.text,
    },
    listFooterStyle: {
      height: scale(100),
    },
    dropDownSearch: {
      height: 40,
      borderWidth: 1,
      borderColor: Colours.greenMain,
      borderRadius: 8,
      paddingHorizontal: 15,
      backgroundColor: theme.colors.card,
      marginBottom: 10,
      fontFamily: Font.regularPoppins,
      color: theme.colors.text,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: Font.semiBoldPoppins,
      color: theme.colors.text,
      textAlign: 'center',
      borderBottomWidth: 0.5,
      borderColor: theme.colors.text,
    },
  });
};
