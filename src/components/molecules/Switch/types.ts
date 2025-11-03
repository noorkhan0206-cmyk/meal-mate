import {ViewStyle} from 'react-native';
import Animated, {AnimatedStyle} from 'react-native-reanimated';

export enum SwitchSizeEnum {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type SwitchSize = 'small' | 'medium' | 'large' | number;
export interface SwitchStyle {
  width: number;
  height: number;
  padding: number;
}

export interface ISwitchProps {
  onColor?: string;
  value?: boolean;
  duration?: number;
  style?: ViewStyle;
  size?: SwitchSize;
  handleChange?: (value: boolean) => void;
}
export interface ISwitchUIProps {
  onPress: () => void;
  trackAnimatedStyle: AnimatedStyle;
  thumbAnimatedStyle: AnimatedStyle;
  height: Animated.SharedValue<number>;
  width: Animated.SharedValue<number>;
  style: ViewStyle;
  switchStyle: ViewStyle;
  value: boolean;
}

export interface ISwitchRefReturnProps {
  on: () => void;
  off: () => void;
  toggle: () => void;
}
