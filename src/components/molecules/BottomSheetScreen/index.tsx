import React, {useCallback, useRef} from 'react';
import {useReducedMotion} from 'react-native-reanimated';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {IBottomSheetScreenProps} from './types';
import styles from './style';

const BottomSheetScreen = ({
  children,
  snapPoints,
}: React.PropsWithChildren<IBottomSheetScreenProps>) => {
  const bottomSheetFormRef = useRef<BottomSheet>(null);
  const theme = useTheme();
  const computedStyle = useStyle(styles);
  const reducedMotion = useReducedMotion();

  const renderBackdrop = useCallback(
    (props_: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props_}
        pressBehavior="none"
        opacity={0.5}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );
  return (
    <BottomSheet
      index={0}
      backgroundStyle={{backgroundColor: theme.colors.card}}
      handleIndicatorStyle={computedStyle.handleStyle}
      ref={bottomSheetFormRef}
      snapPoints={snapPoints}
      animateOnMount={!reducedMotion}
      backdropComponent={renderBackdrop}>
      {children}
    </BottomSheet>
  );
};

export default BottomSheetScreen;
