import {useMemo} from 'react';
import {ButtonProps, IImageFilePickerProps} from './types';

export const useImageFilePickerLogic = ({
  onPressButton,
  selectFileButtonFunction,
  selectFileButtonTitle,
  selectImageButtonFunction,
  selectImageButtonTitle,
  takeImageButtonFunction,
  takeImageButtonTitle,
  title = 'Select an action',
}: IImageFilePickerProps) => {
  const snapPoints = useMemo(() => ['35%'], []);
  const buttons: ButtonProps[] = [
    {
      buttonTitle: takeImageButtonTitle ?? 'Take Photo',
      method: takeImageButtonFunction!,
      id: 'takeImageButton',
      icon: 'camera',
    },
    {
      buttonTitle: selectImageButtonTitle ?? 'Photo Library',
      method: selectImageButtonFunction!,
      id: 'selectImageButton',
      icon: 'gallery',
    },
    {
      buttonTitle: selectFileButtonTitle ?? 'Choose File',
      method: selectFileButtonFunction!,
      id: 'selectFileButton',
      icon: 'fileImage',
    },
  ];

  return {
    onPressButton,
    snapPoints,
    title,
    buttons,
  };
};
