import React, {useCallback} from 'react';
import {useReducedMotion} from 'react-native-reanimated';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {IBottomSheetModalProps} from './types';
import styles from './style';

const BottomSheetPopup = ({
  bottomSheetRef,
  children,
  snapPoints,
  ...rest
}: React.PropsWithChildren<IBottomSheetModalProps>) => {
  const theme = useTheme();
  const computedStyle = useStyle(styles);
  const reducedMotion = useReducedMotion();

  const renderBackdrop = useCallback(
    (props_: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props_}
        pressBehavior="close"
        opacity={0.5}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );
  return (
    <BottomSheetModal
      index={0}
      backgroundStyle={{backgroundColor: theme.colors.card}}
      handleIndicatorStyle={computedStyle.handleStyle}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      animateOnMount={!reducedMotion}
      backdropComponent={renderBackdrop}
      {...rest}>
      {children}
    </BottomSheetModal>
  );
};

export default BottomSheetPopup;
