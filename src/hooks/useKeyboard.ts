import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';
import * as Device from 'expo-device';

/** Some device toolbars are not accounted for in `KeyboardEvent`'s height value. */
let DEVICE_KEYBOARD_OFFSET = 0;

export const initKeyboard = async () => {
  const model = Device.modelName || '';

  if (model.startsWith('SM-')) {
    DEVICE_KEYBOARD_OFFSET = 28; // Samsung
  }
};

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const onKeyboardShow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height + DEVICE_KEYBOARD_OFFSET);
  };

  const onKeyboardHide = () => {
    setKeyboardHeight(0);
  };

  useEffect(() => {
    const keyboardShowEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const keyboardHideEvent =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    // Initialize keyboard offset
    initKeyboard();

    const keyboardWillShowEvent = Keyboard.addListener(
      keyboardShowEvent,
      onKeyboardShow,
    );
    const keyboardWillHideEvent = Keyboard.addListener(
      keyboardHideEvent,
      onKeyboardHide,
    );

    return () => {
      keyboardWillShowEvent.remove();
      keyboardWillHideEvent.remove();
    };
  }, []);

  return [keyboardHeight];
};
