import { Font, FontSize } from "@/theme/fonts";
import { StyleSheet } from "react-native";

export default (
  textColor?: string,
  borderColor?: string,
  borderWidth?: number,
  backgroundColor?: string
) => {
  return StyleSheet.create({
    input: {
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 7,
      borderColor: borderColor,
      borderWidth: borderWidth,
      paddingHorizontal: 15,
      height: 40,
      padding: 5,
      fontSize: FontSize.Base,
      fontFamily: Font.regularPoppins,
      color: textColor,
      backgroundColor: backgroundColor,
    },
  });
};
