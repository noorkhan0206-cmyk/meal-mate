import { useMemo, useRef } from "react";
import { LayoutChangeEvent, ViewStyle } from "react-native";
import { useAnimationAboveKeyboard } from "./hooks";
import { useKeyboard } from "@/hooks/useKeyboard";

export const useViewAboveKeyboardLogic = (
  showView: boolean,
  isSelfServe: boolean,
  dockToBottom?: boolean
) => {
  const [keyboardHeight] = useKeyboard();
  const [viewHeightAnim] = useAnimationAboveKeyboard(
    showView,
    isSelfServe,
    dockToBottom
  );

  const viewAboveKeyboardHeight = useRef(0);

  const keyboardHeightStyle: ViewStyle = useMemo(() => {
    const viewHeight = keyboardHeight + viewAboveKeyboardHeight.current;

    return {
      height: viewHeight,
    };
  }, [keyboardHeight, viewAboveKeyboardHeight]);

  const isKeyboardVisible = keyboardHeight > 0;

  const onLayout = (event: LayoutChangeEvent) => {
    viewAboveKeyboardHeight.current = event.nativeEvent.layout.height
      ? event.nativeEvent.layout.height
      : 0;
  };

  return {
    keyboardHeight,
    viewHeightAnim,
    onLayout,
    keyboardHeightStyle,
    isKeyboardVisible,
  };
};
