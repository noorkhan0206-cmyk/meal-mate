import React, { memo } from "react";
import { TextInput } from "react-native";
import { useCustomTextInputLogic } from "./logic";
import CustomTextInputUI from "./ui";
import { ICustomTextInputProps } from "./types";
import { CustomTextInputAreEqual } from "./helpers";

const CustomTextInput = React.forwardRef<TextInput, ICustomTextInputProps>(
  (props, ref) => {
    const logicValues = useCustomTextInputLogic(props);

    return <CustomTextInputUI {...logicValues} ref={ref} />;
  }
);

export default memo(CustomTextInput, CustomTextInputAreEqual);
