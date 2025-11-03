import React, {forwardRef} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useImageFilePickerLogic} from './logic';
import ImageFilePickerUI from './ui';
import {IImageFilePickerProps} from './types';

const ImageFilePicker = forwardRef(
  (props: IImageFilePickerProps, ref: React.ForwardedRef<BottomSheetModal>) => {
    const logicValues = useImageFilePickerLogic(props);
    return <ImageFilePickerUI {...logicValues} ref={ref} />;
  },
);

export default ImageFilePicker;
