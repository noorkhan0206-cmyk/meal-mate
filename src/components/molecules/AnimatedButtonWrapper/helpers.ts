import {Animated} from 'react-native';

export const buttonAnimation = () => {
  const animation = new Animated.Value(0);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });
  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return {
    translateY,
    onPressIn,
    onPressOut,
  };
};
