import { TextInputProps } from "react-native";

import { ICustomTextInputProps } from "./types";
import {
  _objectWithoutProperties,
  checkMemoOfSomeArrProps,
} from "@/theme/utils";

export const inputFunctionProps = [
  "onBlur",
  "onChange",
  "onChangeText",
  "onContentSizeChange",
  "onEndEditing",
  "onPressIn",
  "onPressOut",
  "onFocus",
  "onKeyPress",
  "onLayout",
  "onScroll",
  "onSelectionChange",
  "onSubmitEditing",
];

export const CustomTextInputAreEqual = (
  prevProps: ICustomTextInputProps,
  nextProps: ICustomTextInputProps
) => {
  const inputProps = Object.keys(
    _objectWithoutProperties<TextInputProps>(prevProps, inputFunctionProps)
  );

  return checkMemoOfSomeArrProps(prevProps, nextProps, inputProps);
};
