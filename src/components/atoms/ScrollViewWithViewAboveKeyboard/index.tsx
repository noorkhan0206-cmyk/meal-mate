import React from "react";
import { useViewAboveKeyboardLogic } from "./logic";
import ScrollViewWithViewAboveKeyboardUI from "./ui";
import { IViewAboveKeyboardProps } from "./types";

const ScrollViewWithViewAboveKeyboard = ({
  showView,
  ...restProps
}: React.PropsWithChildren<IViewAboveKeyboardProps>) => {
  const logicValues = useViewAboveKeyboardLogic(
    showView!,
    restProps.isSelfServe,
    restProps.dockToBottom
  );

  return (
    <ScrollViewWithViewAboveKeyboardUI {...{ ...restProps, ...logicValues }} />
  );
};

export default ScrollViewWithViewAboveKeyboard;
