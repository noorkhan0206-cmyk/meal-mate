import React from "react";
import { Animated, View } from "react-native";

// import {windowHeight} from '@services/dimension';
import { IViewAboveKeyboardUIProps } from "./types";
import styles from "./style";
import { useStyle } from "@/hooks/useStyle";
import { WINDOW_HEIGHT } from "@gorhom/bottom-sheet";

const ScrollViewWithViewAboveKeyboardUI = ({
  children,
  dockToBottom,
  fillerColor,
  isKeyboardVisible,
  keyboardHeight,
  keyboardHeightStyle,
  onLayout,
  viewAboveKeyboard,
  viewHeightAnim,
  ...scrollViewProps
}: React.PropsWithChildren<IViewAboveKeyboardUIProps>) => {
  const computedComponentStyle = useStyle(
    styles,
    keyboardHeight,
    viewHeightAnim,
    dockToBottom,
    fillerColor
  );

  return (
    <>
      <Animated.ScrollView
        {...scrollViewProps}
        contentContainerStyle={{ paddingBottom: WINDOW_HEIGHT * 0.3 }}
      >
        {children}
        <View style={keyboardHeightStyle} />
      </Animated.ScrollView>
      <Animated.View style={computedComponentStyle.container}>
        <View onLayout={onLayout}>
          {typeof viewAboveKeyboard === "function"
            ? viewAboveKeyboard({ isKeyboardVisible })
            : viewAboveKeyboard}
          <View style={computedComponentStyle.filler} />
        </View>
      </Animated.View>
    </>
  );
};

export default ScrollViewWithViewAboveKeyboardUI;
