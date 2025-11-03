export const Colours = {
  // Lavender & White color palette
  primaryMain: '#9B7EBD', // Lavender
  primarySecondary: '#C8B6E2', // Light lavender
  primaryThird: '#E8DFF5', // Very light lavender
  primaryFourth: '#F9F7FC', // Almost white lavender
  
  // Accent colors
  accentLavender: '#9B7EBD', // Main lavender
  accentLightLavender: '#C8B6E2', // Light lavender
  accentPaleLavender: '#E8DFF5', // Pale lavender
  accentPurple: '#7B68A6', // Deep lavender
  accentCream: '#F5F3F8', // Lavender cream
  accentWhite: '#FFFFFF', // Pure white
  
  // Greys with lavender tint
  grey1: '#F5F3F8',
  grey2: '#F9F7FC',
  grey3: '#EDE9F5',
  grey4: '#FDFCFE',
  grey5: '#F8F6FB',
  greyMain: '#8B7BA8',
  greyMedium: '#B5A8C9',
  greyDark: '#6B5B7B',
  
  // Text colors
  blackDark: '#4A3F5C',
  textFieldBlack: '#6B5B7B',
  labelSecondary: '#8B7BA8',
  
  // Legacy colors (updated to lavender theme)
  violetdark1: '#9B7EBD',
  violetdark2: '#E5D4F7',
  violetdark3: '#F5EFFA',
  bluegreydark1: '#9B7EBD',
  bluegreydark2: '#C8B6E2',
  bluegreydark3: '#E8DFF5',
  yellow1: '#F5F3F8',
  yellow2: '#F9F7FC',
  yellow3: '#FDFCFE',
  orange: '#D4A5D8',
  
  // Base colors
  white: '#FFFFFF',
  searchTextField: '#F9F7FC',
  red: '#D47B9E',
  navigationTextColor: '#4A3F5C',
  backdropColor: 'rgba(75, 63, 92, 0.4)',
  tabBarBorderColor: '#EDE9F5',
  colorMeetblue: '#9B7EBD',
  accentYellowDark: '#E8DFF5',
};

export interface ColorsProps {
  dark: boolean;
  colors: {
    background: string;
    primary: string;
    textBlack: string;
    textLabelSecondary: string;
    border: string;
    headerText: string;
    placeholderText: string;
    shiftBorderColor: string;
    tabBarColor: string;
    tabIconColor: string;
    greyIcon: string;
    separator: string;
    shimmerColors: string[];
    card: string;
    text: string;
    notification: string;
  };
}

// Light theme colors - Lavender & White
export const lightColors: ColorsProps = {
  dark: false,
  colors: {
    background: '#FDFCFE', // Very light lavender white
    primary: Colours.primaryMain, // Lavender
    textBlack: Colours.blackDark, // Dark lavender text
    textLabelSecondary: Colours.labelSecondary, // Medium lavender
    border: Colours.grey1, // Light lavender border
    headerText: Colours.blackDark,
    placeholderText: Colours.labelSecondary,
    shiftBorderColor: Colours.grey1,
    tabBarColor: Colours.white,
    tabIconColor: Colours.greyMedium,
    greyIcon: Colours.greyMedium,
    separator: Colours.grey1,
    shimmerColors: ['#F5F3F8', '#E8DFF5', '#F5F3F8'],
    card: Colours.white,
    text: Colours.blackDark,
    notification: Colours.yellow1,
  },
};

// Dark theme colors - Dark Lavender
export const darkColors: ColorsProps = {
  dark: true,
  colors: {
    background: '#2A1F3D', // Dark lavender background
    primary: Colours.primaryMain, // Lavender
    textBlack: '#FFFFFF', // White text for dark mode
    textLabelSecondary: '#C8B6E2', // Light lavender for secondary text
    border: '#4A3F5C', // Dark lavender border
    headerText: '#FFFFFF', // White header text
    placeholderText: '#B5A8C9', // Medium lavender placeholder
    shiftBorderColor: '#5C4F6E', // Lighter dark lavender border
    tabBarColor: '#3D2F52', // Dark lavender tab bar
    tabIconColor: '#8B7BA8', // Lavender grey icon
    greyIcon: '#B5A8C9', // Medium lavender icon
    separator: '#4A3F5C', // Dark lavender separator
    shimmerColors: ['#4A3F5C', '#5C4F6E', '#4A3F5C'],
    card: '#3D2F52', // Dark lavender card background
    text: '#FFFFFF', // White text
    notification: Colours.accentYellowDark,
  },
};
