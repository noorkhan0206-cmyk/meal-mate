import {IconName} from '@components/atoms/Icon/types';

export interface IImageFilePickerProps {
  title?: string;
  onPressButton: () => void;
  takeImageButtonTitle?: string;
  takeImageButtonFunction?: () => void;
  selectImageButtonTitle?: string;
  selectImageButtonFunction?: () => void;
  selectFileButtonTitle?: string;
  selectFileButtonFunction?: () => void;
}

export interface IImageFilePickerUIProps extends IImageFilePickerProps {
  iconName?: IconName;
  snapPoints: string[];
  buttons: ButtonProps[];
}

export interface ButtonProps {
  buttonTitle: string;
  method: () => void;
  id: string;
  icon: string;
}
