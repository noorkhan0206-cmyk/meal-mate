import React, {ForwardedRef, RefObject, forwardRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import Icon from '@components/atoms/Icon';
import BottomSheetPopup from '@components/molecules/BottomSheetPopup';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {Colours} from '@theme/colors';
import CloseButton from './subcomponents/CloseButton';
import {IImageFilePickerUIProps} from './types';
import styles from './style';

const ImageFilePickerUI = forwardRef(
  (
    {buttons, onPressButton, snapPoints, title}: IImageFilePickerUIProps,
    ref: ForwardedRef<BottomSheetModal>,
  ) => {
    const theme = useTheme();
    const computedComponentStyle = useStyle(styles, theme);

    return (
      <>
        <BottomSheetPopup
          snapPoints={snapPoints}
          bottomSheetRef={ref as RefObject<BottomSheetModal>}>
          <View style={computedComponentStyle.buttonRow}>
            <Text style={computedComponentStyle.title}>{title}</Text>
            <CloseButton onPress={onPressButton} />
          </View>
          <View style={computedComponentStyle.buttonContainer}>
            {buttons.map(({buttonTitle, icon, id, method}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={method}
                style={computedComponentStyle.listContainer}
                key={id}>
                <Icon
                  width={30}
                  height={30}
                  name={icon}
                  fill={Colours.blueMain}
                />
                <Text style={computedComponentStyle.listLabel}>
                  {buttonTitle}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </BottomSheetPopup>
      </>
    );
  },
);

export default ImageFilePickerUI;
