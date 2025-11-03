import {Animated, ViewStyle} from 'react-native';
import {IconName} from '@components/atoms/Icon/types';

export interface IModalProps {
  onPressButton: () => void;
  overlayClicked: () => void;
  //opacity?: Animated.AnimatedInterpolation<number>;
  showModal: boolean;
  status?: string;
  style: ViewStyle;
}

export interface IModalUIProps {
  onPressButton: () => void;
  overlayClicked: () => void;
  opacity?: Animated.AnimatedInterpolation<number>;
  showModal: boolean;
  status?: string;
  iconName: IconName;
  iconScale: Animated.AnimatedInterpolation<number>;
  style: ViewStyle;
}

export enum ModalType {
  error = 'error',
  success = 'success',
}
