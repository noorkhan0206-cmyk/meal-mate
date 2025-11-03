import React, { memo } from "react";
import { ActivityIndicator, View } from "react-native";

import { ILoadingProps } from "./types";
import styles from "./style";
import { useStyle } from "@/hooks/useStyle";
import { Colours } from "@/theme/colors";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";

const LoadingUI = ({ isVisible }: ILoadingProps) => {
  const computedComponentStyle = useStyle(styles, SCREEN_HEIGHT);
  if (!isVisible) {
    return <></>;
  }
  return (
    <View style={computedComponentStyle.container}>
      <ActivityIndicator color={Colours.blueMain} size={"large"} />
    </View>
  );
};

export default memo(LoadingUI);
