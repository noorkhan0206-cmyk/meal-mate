import {useEffect, useMemo, useRef} from 'react';
import {Keyboard} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useKeyboard} from '@hooks/useKeyboard';
import {IErrorModalProps} from './types';

export const useErrorModalLogic = ({
  error,
  onCloseAlert,
  showBackdrop,
}: IErrorModalProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [keyboardHeight] = useKeyboard();
  const isKeyboardVisible = keyboardHeight > 0;
  const openAlert = () => {
    bottomSheetRef.current?.present();
  };

  const onCloseError = () => {
    bottomSheetRef.current?.close();
  };

  const checkKeyboard = () => {
    if (isKeyboardVisible) {
      Keyboard.dismiss();
    }
  };

  const useAnimatedModal = (errorMess: string) => {
    useEffect(() => {
      checkKeyboard();
      if (errorMess) {
        openAlert();
      } else {
        onCloseError();
      }
    }, [errorMess]);
  };

  useAnimatedModal(error!);

  const snapPoints = useMemo(() => ['20%', '70%'], []);
  return {
    bottomSheetRef,
    error,
    onCloseAlert,
    snapPoints,
    showBackdrop,
  };
};
