import React, {useCallback} from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {useReducedMotion} from 'react-native-reanimated';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import {useStyle} from '@hooks/useStyle';
import CloseButton from './subcomponents/CloseButton';
import {IErrorModalUIProps} from './types';
import styles from './style';

const ErrorModalUI = ({
  bottomSheetRef,
  error,
  onCloseAlert,
  showBackdrop,
  snapPoints,
}: IErrorModalUIProps) => {
  const {width: windowWidth} = useWindowDimensions();
  const computedStyles = useStyle(styles, windowWidth);
  const reducedMotion = useReducedMotion();
  const renderBackdrop = useCallback(
    (props_: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props_}
        onPress={onCloseAlert}
        opacity={0.5}
        disappearsOnIndex={-1}
      />
    ),
    [onCloseAlert],
  );
  return (
    <BottomSheetModal
      index={0}
      backgroundStyle={computedStyles.errorContainer}
      handleIndicatorStyle={computedStyles.handleStyle}
      ref={bottomSheetRef}
      backdropComponent={showBackdrop ? renderBackdrop : null}
      animateOnMount={!reducedMotion}
      snapPoints={snapPoints}>
      <View style={computedStyles.buttonRow}>
        <CloseButton onPress={onCloseAlert} />
      </View>
      <View style={computedStyles.messageContainer}>
        <Text style={computedStyles.error}>{error}</Text>
      </View>
    </BottomSheetModal>
  );
};

export default ErrorModalUI;
