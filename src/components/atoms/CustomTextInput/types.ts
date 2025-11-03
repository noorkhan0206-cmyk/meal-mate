import {TextInputProps, ViewStyle} from 'react-native';

export interface ICustomTextInputProps extends TextInputProps {
  customStyle?: ViewStyle;
  hasError?: boolean;
  marginBottom?: boolean;
  isFocused?: boolean;
  /** Force-disable any saved password autofill features */
  disableAutofill?: boolean;
  textColor?: string;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
}

export interface ICustomTextInputUIProps extends ICustomTextInputProps {
  isFocused: boolean;
  onFocusInput: TextInputProps['onBlur'];
  onBlurInput: TextInputProps['onFocus'];
}
