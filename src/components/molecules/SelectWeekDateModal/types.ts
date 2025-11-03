import {MutableRefObject, RefObject} from 'react';
import {FlatList} from 'react-native';
import {DateData} from 'react-native-calendars';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {IWeeksPickerProps} from '@screens/RotaStack/ScheduleScreen/types';

export interface ISelectWeekDateModalUIProps {
  snapPoints: string[];
  bottomSheetRef: RefObject<BottomSheetModal>;
  openAlert: () => void;
  onCloseAlert: () => void;
  formattedStartDate: string;
  formattedEndDate: string;
  onDayPress: (day: DateData) => void;
  dateRef: RefObject<FlatList>;
  weeks: IWeeksPickerProps[];
  onViewableItemsChanged: RefObject<any>;
  viewabilityConfig: MutableRefObject<{
    itemVisiblePercentThreshold: number;
  }>;
  date: string;
}
export interface ISelectWeekDateModalProps {
  date: string;
  setDate: (date: string) => void;
  handleChangeWeek?: (item: IWeeksPickerProps) => void;
  weeks: IWeeksPickerProps[];
}
