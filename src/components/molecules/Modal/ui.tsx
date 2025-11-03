import React from 'react';
import {Animated, Pressable, View, useWindowDimensions} from 'react-native';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {IModalUIProps} from './types';
import styles from './style';

const ModalUI = ({
  children,
  opacity,
  overlayClicked,
  showModal,
  style,
}: React.PropsWithChildren<IModalUIProps>) => {
  const {height: windowHeight, width: windowWidth} = useWindowDimensions();
  const theme = useTheme();
  const computedComponentStyle = useStyle(
    styles,
    windowHeight,
    windowWidth,
    theme,
  );
  const showDisplay = 'flex';
  const hideDisplay = 'none';

  return (
    <>
      <Pressable
        onPress={overlayClicked}
        style={{
          ...computedComponentStyle.overlay,
          display: showModal ? showDisplay : hideDisplay,
        }}>
        <View />
      </Pressable>
      <Animated.View
        style={{
          ...computedComponentStyle.subContainer,
          opacity,
          ...style,
        }}>
        <View>{children}</View>
      </Animated.View>
    </>
  );
};

export default ModalUI;
