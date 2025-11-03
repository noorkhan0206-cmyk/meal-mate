import React, {useCallback, useState} from 'react';
import {ICustomTextInputProps} from './types';

export const useCustomTextInputLogic = ({
  onBlur,
  onFocus,
  ...props
}: React.PropsWithChildren<ICustomTextInputProps>) => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocusInput: typeof onFocus = useCallback(
    // @ts-ignore
    e => {
      setIsFocused(true);
      onFocus && onFocus(e);
    },
    [onFocus],
  );
  const onBlurInput: typeof onBlur = useCallback(
    // @ts-ignore
    e => {
      setIsFocused(false);
      onBlur && onBlur(e);
    },
    [onBlur],
  );

  return {isFocused, onFocusInput, onBlurInput, ...props};
};
