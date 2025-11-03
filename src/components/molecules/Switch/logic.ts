import {useEffect, useImperativeHandle, useMemo, ForwardedRef} from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import useTheme from '@hooks/useTheme';
import {Colours} from '@theme/colors';
import {ISwitchProps, ISwitchRefReturnProps, SwitchSizeEnum} from './types';
const DURATION = 400;
const DEFAULT_SWITCH_STATUS = false;
const SWITCH_ON_COLOR = Colours.blueMain;
const DEFAULT_SWITCH_SIZE = SwitchSizeEnum.Small;

export const useSwitchLogic = (
  {
    duration = DURATION,
    handleChange,
    onColor = SWITCH_ON_COLOR,
    size = DEFAULT_SWITCH_SIZE,
    style = {},
    value = DEFAULT_SWITCH_STATUS,
  }: ISwitchProps,
  ref: ForwardedRef<ISwitchRefReturnProps>,
) => {
  const height = useSharedValue(0);
  const width = useSharedValue(0);
  const isOnValue = useSharedValue(value);
  const theme = useTheme();

  var offColor = theme.colors.card;

  const switchStyle = useMemo(() => {
    if (!size) {
      return {width: 60, height: 30, padding: 5};
    }
    if (typeof size === 'number') {
      return {width: size * 2, height: size, padding: size / 10};
    }
    const styleMap = {
      [SwitchSizeEnum.Small]: {width: 40, height: 20, padding: 3},
      [SwitchSizeEnum.Medium]: {width: 60, height: 30, padding: 5},
      [SwitchSizeEnum.Large]: {width: 80, height: 40, padding: 7},
    };
    return styleMap[size];
  }, [size]);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      +isOnValue.value,
      [0, 1],
      [offColor, onColor],
    );
    const colorValue = withTiming(color, {duration});

    return {
      backgroundColor: colorValue,
      borderRadius: height.value / 2,
      borderWidth: 1.5,
      borderColor: onColor,
    };
  });

  const handlePress = () => {
    const newValue = !isOnValue.value;
    isOnValue.value = newValue;
    if (handleChange) {
      handleChange(newValue);
    }
  };

  const on = () => {
    isOnValue.value = true;
  };
  const toggle = () => {
    isOnValue.value = !isOnValue.value;
  };
  const off = () => {
    isOnValue.value = false;
  };

  useImperativeHandle(ref, () => ({
    on,
    off,
    toggle,
  }));

  useEffect(() => {
    isOnValue.value = value;
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(isOnValue.value),
      [0, 1],
      [0, width.value - height.value],
    );
    const translateValue = withTiming(moveValue, {duration});

    return {
      transform: [{translateX: translateValue}],
      borderRadius: height.value / 2,
      backgroundColor: isOnValue.value ? Colours.white : onColor,
    };
  });

  return {
    trackAnimatedStyle,
    thumbAnimatedStyle,
    style,
    onPress: handlePress,
    height,
    width,
    switchStyle,
    value: isOnValue.value,
  };
};
