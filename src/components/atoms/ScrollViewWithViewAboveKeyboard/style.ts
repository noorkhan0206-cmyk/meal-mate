import {StyleSheet} from 'react-native';

export default (
  keyboardHeight: number,
  viewHeightAnim: any,
  dockToBottom?: boolean,
  fillerColor?: string,
) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      opacity: keyboardHeight > 0 || dockToBottom ? 1 : 0,
      bottom: viewHeightAnim,
    },
    filler: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: fillerColor,
    },
  });
};
