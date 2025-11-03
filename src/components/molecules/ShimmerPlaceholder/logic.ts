import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
} from 'react';
import {
  Easing,
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import useTheme from '@hooks/useTheme';
import {ShimmerPlaceholderProps} from './types';

export const useShimmerPlaceholderLogic = (
  {
    children,
    childrenContainerProps,
    containerProps,
    contentStyle,
    delay = 0,
    duration = 1000,
    height = 15,
    isInteraction = true,
    isReversed = false,
    location = [0.3, 0.5, 0.7],
    shimmerContainerProps,
    shimmerStyle,
    shimmerWidthPercent = 1,
    stopAutoRun = false,
    style,
    visible,
    width = 200,
  }: ShimmerPlaceholderProps,
  ref: React.Ref<any>,
) => {
  const theme = useTheme();
  const beginShimmerPosition = useSharedValue(-1);
  const outputRange = useMemo(
    () => (isReversed ? [width, -width] : [-width, width]),
    [width, isReversed],
  );

  const startAnimation = useCallback(() => {
    beginShimmerPosition.value = withRepeat(
      withDelay(
        delay,
        withTiming(1, {
          duration: duration,
          easing: Easing.linear,
        }),
      ),
      -1,
      isReversed,
    );
  }, [delay, duration, beginShimmerPosition, isReversed]);

  const stopAnimation = useCallback(() => {
    cancelAnimation(beginShimmerPosition);
  }, [beginShimmerPosition]);

  useImperativeHandle(ref, () => ({
    start: startAnimation,
    stop: stopAnimation,
  }));

  useEffect(() => {
    if (!visible && !stopAutoRun) {
      startAnimation();
      return () => {
        cancelAnimation(beginShimmerPosition);
      };
    }
  }, [visible, stopAutoRun, beginShimmerPosition, startAnimation]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      beginShimmerPosition.value,
      [-1, 1],
      outputRange,
    );
    return {
      flex: 1,
      transform: [{translateX}],
    };
  });

  return {
    visible,
    animatedStyle,
    width,
    height,
    shimmerColors: theme.colors.shimmerColors,
    location,
    style,
    contentStyle,
    shimmerStyle,
    children,
    shimmerWidthPercent,
    containerProps,
    shimmerContainerProps,
    childrenContainerProps,
    isInteraction,
  };
};
