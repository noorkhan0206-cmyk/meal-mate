import {
  ColorValue,
  DimensionValue,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

type PressablePropsWithoutStyle = Omit<PressableProps, 'style'>;
export interface IButtonProps extends PressablePropsWithoutStyle {
  buttonText?: string;
  fontSize?: number;
  isWaiting?: boolean;
  dashColor?: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle> | any;
  pressedBackgroundColor?: ColorValue;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  buttonWidth?: DimensionValue;
}
