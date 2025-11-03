import {RefObject} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

export interface IErrorModalProps {
  error?: string;
  onCloseAlert?: () => void;
  showBackdrop: boolean;
}

export interface IErrorModalUIProps extends IErrorModalProps {
  snapPoints: string[];
  bottomSheetRef: RefObject<BottomSheetModal>;
}
