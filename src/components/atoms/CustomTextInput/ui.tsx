import React from 'react';
import { TextInput } from 'react-native';
import { ICustomTextInputUIProps } from './types';
import styles from './style';
import useTheme from '@/hooks/useTheme';
import { useStyle } from '@/hooks/useStyle';
import { Colors } from '@/theme/colors';

const CustomTextInputUI = React.forwardRef<TextInput, ICustomTextInputUIProps>(
  (props, ref) => {
    const theme = useTheme();
    const {
      isFocused,
      borderWidth = isFocused ? 3 : 1,
      borderColor = Colors[theme].primary,
      backgroundColor = theme.colors.background,
      onBlurInput,
      onFocusInput,
      textColor,
      ...textInputProps
    } = props;

    const computedComponentStyle = useStyle(
      styles,
      textColor,
      borderColor,
      borderWidth,
      backgroundColor,
    );

    return (
      <TextInput
        style={computedComponentStyle.input}
        {...textInputProps}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        ref={ref}
      />
    );
  },
);

// ✅ Add this line
CustomTextInputUI.displayName = 'CustomTextInputUI';

export default CustomTextInputUI;
