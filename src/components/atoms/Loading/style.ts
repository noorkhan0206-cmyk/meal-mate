import { Font, FontSize } from "@/theme/fonts";
import { StyleSheet, ViewStyle } from "react-native";

export default (containerStyles?: ViewStyle, height?: number) => {
  return StyleSheet.create({
    container: {
      zIndex: 1,
      width: 90,
      height: height,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      ...containerStyles,
    },
    text: {
      fontSize: FontSize.H1,
      fontFamily: Font.boldPoppins,
      fontWeight: "700",
      color: "black",
    },
  });
};
