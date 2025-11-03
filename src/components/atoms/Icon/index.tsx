import React from "react";
import { IIconProps } from "./types";
import { Icons } from "@/theme/icons";

const Icon = ({
  fill,
  height = 30,
  name,
  width = 30,
  ...restProps
}: IIconProps) => {
  const GeneratedIcon = Icons[name as keyof typeof Icons]; // Add 'as keyof typeof Icons' to cast 'name' as a keyof typeof Icons.
  if (!GeneratedIcon) {
    return null;
  }
  return <GeneratedIcon {...{ ...restProps, fill, height, width }} />;
};

export default Icon;
