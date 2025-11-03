export const Colours = {
  // Sage Green to Navy Blue color palette
  primaryMain: '#4A7C7E', // Medium teal (color 3)
  primarySecondary: '#7FA89A', // Sage green (color 2)
  primaryThird: '#B4C7BE', // Light sage (color 1)
  primaryFourth: '#F5F7F6', // Very light sage/white
  
  // Accent colors
  accentSage: '#B4C7BE', // Light sage
  accentTeal: '#7FA89A', // Medium sage
  accentDarkTeal: '#4A7C7E', // Dark teal
  accentNavy: '#3D5A5C', // Navy teal (color 4)
  accentDarkNavy: '#2F4244', // Darkest navy (color 5)
  accentWhite: '#FFFFFF', // Pure white
  
  // Greys with teal tint
  grey1: '#E8EDEB',
  grey2: '#F0F3F2',
  grey3: '#D8E0DD',
  grey4: '#F8F9F9',
  grey5: '#EDF1EF',
  greyMain: '#6B8B8A',
  greyMedium: '#8FA5A3',
  greyDark: '#4A6665',
  
  // Text colors
  blackDark: '#2F4244',
  textFieldBlack: '#3D5A5C',
  labelSecondary: '#6B8B8A',
  
  // Legacy colors (updated to sage/teal theme)
  violetdark1: '#4A7C7E',
  violetdark2: '#B4D4D1',
  violetdark3: '#E8F0EE',
  bluegreydark1: '#4A7C7E',
  bluegreydark2: '#7FA89A',
  bluegreydark3: '#B4C7BE',
  yellow1: '#E8EDEB',
  yellow2: '#F0F3F2',
  yellow3: '#F8F9F9',
  orange: '#8FAAA6',
  
  // Base colors
  white: '#FFFFFF',
  searchTextField: '#F0F3F2',
  red: '#C97B7B',
  navigationTextColor: '#2F4244',
  backdropColor: 'rgba(47, 66, 68, 0.4)',
  tabBarBorderColor: '#D8E0DD',
  colorMeetblue: '#4A7C7E',
  accentYellowDark: '#B4C7BE',
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

// Light theme colors - Sage & Teal
export const lightColors: ColorsProps = {
  dark: false,
  colors: {
    background: '#F8F9F9', // Very light sage white
    primary: Colours.primaryMain, // Medium teal
    textBlack: Colours.blackDark, // Dark navy text
    textLabelSecondary: Colours.labelSecondary, // Medium teal grey
    border: Colours.grey1, // Light sage border
    headerText: Colours.blackDark,
    placeholderText: Colours.labelSecondary,
    shiftBorderColor: Colours.grey1,
    tabBarColor: Colours.white,
    tabIconColor: Colours.greyMedium,
    greyIcon: Colours.greyMedium,
    separator: Colours.grey1,
    shimmerColors: ['#E8EDEB', '#B4C7BE', '#E8EDEB'],
    card: Colours.white,
    text: Colours.blackDark,
    notification: Colours.yellow1,
  },
};

// Dark theme colors - Dark Navy Teal
export const darkColors: ColorsProps = {
  dark: true,
  colors: {
    background: '#1A2728', // Dark navy background
    primary: Colours.primaryMain, // Medium teal
    textBlack: '#FFFFFF', // White text for dark mode
    textLabelSecondary: '#7FA89A', // Sage green for secondary text
    border: '#3D5A5C', // Navy teal border
    headerText: '#FFFFFF', // White header text
    placeholderText: '#8FA5A3', // Medium teal grey placeholder
    shiftBorderColor: '#4A6665', // Lighter dark teal border
    tabBarColor: '#2F4244', // Darkest navy tab bar
    tabIconColor: '#6B8B8A', // Teal grey icon
    greyIcon: '#8FA5A3', // Medium teal grey icon
    separator: '#3D5A5C', // Navy teal separator
    shimmerColors: ['#3D5A5C', '#4A6665', '#3D5A5C'],
    card: '#2F4244', // Darkest navy card background
    text: '#FFFFFF', // White text
    notification: Colours.accentYellowDark,
  },
};
