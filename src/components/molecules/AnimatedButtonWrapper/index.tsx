import React, {Children, isValidElement, cloneElement} from 'react';
import {Animated} from 'react-native';
import {IAnimatedButtonWrapperProps} from './types';
import {buttonAnimation} from './helpers';

const AnimatedButtonWrapper = ({
  children,
  disabled,
}: React.PropsWithChildren<IAnimatedButtonWrapperProps>) => {
  const {onPressIn, onPressOut, translateY} = buttonAnimation();

  return (
    <Animated.View style={!disabled && [{transform: [{translateY}]}]}>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {onPressIn, onPressOut});
        }
        return child;
      })}
    </Animated.View>
  );
};

export default AnimatedButtonWrapper;
