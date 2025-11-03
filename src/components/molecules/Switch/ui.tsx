import React from 'react';
import {View, Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {ISwitchUIProps} from './types';
import styles from './style';

const Switch = ({
  height,
  onPress,
  style,
  switchStyle,
  thumbAnimatedStyle,
  trackAnimatedStyle,
  value,
  width,
}: ISwitchUIProps) => {
  const theme = useTheme();
  const computedStyles = useStyle(styles, theme, value);
  return (
    <View>
      <Pressable onPress={onPress}>
        <Animated.View
          onLayout={e => {
            height.value = e.nativeEvent.layout.height;
            width.value = e.nativeEvent.layout.width;
          }}
          style={[
            switchStyle,
            style,
            trackAnimatedStyle,
            value === false && computedStyles.buttonStyle,
          ]}>
          <Animated.View style={[computedStyles.thumb, thumbAnimatedStyle]} />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default Switch;
