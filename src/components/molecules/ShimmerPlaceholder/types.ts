import * as React from 'react';
import {Animated, StyleProp, ViewProps, ViewStyle} from 'react-native';

export interface ShimmerPlaceholderProps {
  width?: number;
  height?: number;
  shimmerWidthPercent?: number;
  duration?: number;
  delay?: number;
  shimmerColors?: string[];
  location?: number[];
  isReversed?: boolean;
  stopAutoRun?: boolean;
  visible?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  shimmerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  isInteraction?: boolean;
  containerProps?: ViewProps;
  shimmerContainerProps?: ViewProps;
  childrenContainerProps?: ViewProps;
  beginShimmerPosition?: Animated.Value | any;
  animatedValue?: Animated.Value | any;
  animatedStyle?: StyleProp<ViewStyle>;
}
