import {StyleSheet, TextStyle} from 'react-native';

export interface IFontSize {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  large: number;
  base: number;
  small: number;
  thin: number;
  xThin: number;
}

interface IFonts {
  [x: string]: TextStyle;
}

enum FontNames {
  PoppinBlack = 'Poppins-Black',
  PoppinsBlackItalic = 'Poppins-BlackItalic',
  PoppinsBold = 'Poppins-Bold',
  PoppinsBoldItalic = 'Poppins-BoldItalic',
  PoppinsExtraBold = 'Poppins-ExtraBold',
  PoppinsExtraBoldItalic = 'Poppins-ExtraBoldItalic',
  PoppinsExtraLight = 'Poppins-ExtraLight',
  PoppinsExtraLightItalic = 'Poppins-ExtraLightItalic',
  PoppinsItalic = 'Poppins-Italic',
  PoppinsLight = 'Poppins-Light',
  PoppinsLightItalic = 'Poppins-LightItalic',
  PoppinsMedium = 'Poppins-Medium',
  PoppinsMediumItalic = 'Poppins-MediumItalic',
  PoppinsRegular = 'Poppins-Regular',
  PoppinsSemiBold = 'Poppins-SemiBold',
  PoppinsSemiBoldItalic = 'Poppins-SemiBoldItalic',
  PoppinsThin = 'Poppins-Thin',
  PoppinsThinItalic = 'Poppins-ThinItalic',
}

// interface IFontNames {
//   [x: string]: FontNames;
// }

export enum FontSize {
  H1 = 30,
  H2 = 24,
  H3 = 20,
  H4 = 16,
  Large = 24,
  Base = 14,
  Small = 16,
  Thin = 14,
  XThin = 12,
}

export const Font = {
  boldPoppins: FontNames.PoppinsBold,
  lightPoppins: FontNames.PoppinsLight,
  mediumPoppins: FontNames.PoppinsMedium,
  regularPoppins: FontNames.PoppinsRegular,
  semiBoldPoppins: FontNames.PoppinsSemiBold,
};

export default StyleSheet.create<IFonts>({
  regular: {
    fontFamily: Font.regularPoppins,
  },
  bold: {
    fontFamily: Font.boldPoppins,
  },
  h1: {
    fontFamily: Font.semiBoldPoppins,
    fontSize: FontSize.H1,
  },
  h2: {
    fontFamily: Font.boldPoppins,
    fontSize: FontSize.H2,
  },
  h3: {
    fontFamily: Font.boldPoppins,
    fontSize: FontSize.H3,
  },
  h4: {
    fontFamily: Font.boldPoppins,
    fontSize: FontSize.H4,
  },
  large: {
    fontFamily: Font.regularPoppins,
    fontSize: FontSize.Large,
  },
  base: {
    fontFamily: Font.regularPoppins,
    fontSize: FontSize.Base,
  },
  small: {
    fontFamily: Font.regularPoppins,
    fontSize: FontSize.Small,
  },
  thin: {
    fontFamily: Font.regularPoppins,
    fontSize: FontSize.Thin,
  },
  xThin: {
    fontFamily: Font.regularPoppins,
    fontSize: FontSize.XThin,
  },
});
