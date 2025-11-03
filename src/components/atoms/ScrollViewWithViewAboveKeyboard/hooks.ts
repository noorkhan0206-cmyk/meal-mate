import { useKeyboard } from "@/hooks/useKeyboard";
import { useEffect, useMemo, useRef } from "react";
import { Animated } from "react-native";

const OFFSCREEN_POSITION = -150;

export const useAnimationAboveKeyboard = (
  showView: boolean,
  isSelfServe: boolean,
  dockToBottom?: boolean
) => {
  const [keyboardHeight] = useKeyboard();
  const aboveKeyboard = isSelfServe ? keyboardHeight + 70 : keyboardHeight - 55;
  const bottomPadding = isSelfServe ? 70 : 0;

  const viewHeightAnim = useRef(new Animated.Value(0)).current;

  const FINAL_ANIMATED_VALUE = useMemo(() => {
    if (keyboardHeight > 0) {
      return aboveKeyboard;
    } else {
      return dockToBottom ? bottomPadding : OFFSCREEN_POSITION;
    }
  }, [aboveKeyboard, bottomPadding, dockToBottom, keyboardHeight]);

  useEffect(() => {
    Animated.timing(viewHeightAnim, {
      toValue: FINAL_ANIMATED_VALUE,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [viewHeightAnim, keyboardHeight, showView, FINAL_ANIMATED_VALUE]);

  return [viewHeightAnim];
};
