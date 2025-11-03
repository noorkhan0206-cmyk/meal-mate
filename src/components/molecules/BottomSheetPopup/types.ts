import {RefObject} from 'react';
import {BottomSheetModal, BottomSheetProps} from '@gorhom/bottom-sheet';

export interface IBottomSheetModalProps extends BottomSheetProps {
  snapPoints: string[];
  bottomSheetRef: RefObject<BottomSheetModal>;
}
