import {Dispatch, RefObject, SetStateAction} from 'react';
import {DateData} from 'react-native-calendars';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

export interface ISelectDateModalUIProps {
  snapPoints: string[];
  bottomSheetRef: RefObject<BottomSheetModal>;
  openAlert: () => void;
  onCloseAlert: () => void;
  formattedStartDate: string;
  formattedEndDate: string;
  onDayPress: (day: DateData) => void;
  selectedDate: string;
}
export interface ISelectDateModalProps {
  date: string;
  setDate: Dispatch<SetStateAction<string>>;
}
