import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {useStyle} from '@hooks/useStyle';
import {ShimmerPlaceholderProps} from './types';
import styles from './style';

const ShimmerPlaceholderUI = ({
  animatedStyle,
  children,
  childrenContainerProps,
  containerProps,
  contentStyle,
  height,
  location,
  shimmerColors = [],
  shimmerContainerProps,
  shimmerStyle,
  shimmerWidthPercent = 1,
  style,
  visible,
  width,
}: ShimmerPlaceholderProps) => {
  const computedStyle = useStyle(styles, shimmerColors);
  return (
    <View
      style={[
        !visible && {height, width},
        computedStyle.container,
        !visible && shimmerStyle,
        style,
      ]}
      {...containerProps}>
      <View
        style={[!visible && computedStyle.displayNone, visible && contentStyle]}
        {...childrenContainerProps}>
        {children}
      </View>
      {!visible && (
        <View
          style={[computedStyle.defaultShimmerStyle, shimmerStyle]}
          {...shimmerContainerProps}>
          <Animated.View style={animatedStyle}>
            <LinearGradient
              colors={shimmerColors}
              style={{
                ...computedStyle.linearGradient,
                width: Number(width) * shimmerWidthPercent,
              }}
              start={{
                x: -1,
                y: 0.5,
              }}
              end={{
                x: 2,
                y: 0.5,
              }}
              locations={location}
            />
          </Animated.View>
        </View>
      )}
    </View>
  );
};

export default ShimmerPlaceholderUI;
