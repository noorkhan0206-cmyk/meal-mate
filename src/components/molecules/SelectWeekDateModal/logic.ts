import {useCallback, useMemo, useRef} from 'react';
import {FlatList} from 'react-native';
import {DateData} from 'react-native-calendars';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {endOfWeek, startOfWeek} from 'date-fns';
import {useFormikContext} from 'formik';
import {useRememberUserHandler} from '@hooks/useRememberUserHandler';
import {formatDate} from '@screens/RotaStack/ScheduleScreen/helpers';
import {
  IDayOfWeek,
  IWeeksArray,
} from '@screens/RotaStack/ScheduleScreen/subcomponents/MyScheduleScreen/types';
import {ISelectWeekDateModalProps} from './types';

export const useSelectWeekDateModalLogic = ({
  date,
  handleChangeWeek,
  setDate,
  weeks,
}: ISelectWeekDateModalProps) => {
  const snapPoints = useMemo(() => ['60%'], []);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const {rememberedUser} = useRememberUserHandler();
  const dayOfWeek = new Date(rememberedUser?.connectWeekStartDate!).getDay();
  let weekDates: IWeeksArray = {start: '', end: ''};

  const viewabilityConfig = useRef({itemVisiblePercentThreshold: 75});
  const {setFieldValue} = useFormikContext();
  const dateRef = useRef<FlatList>(null);
  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      const currentWeekItem = viewableItems[0].item;
      if (currentWeekItem?.id) {
        if (handleChangeWeek) {
          handleChangeWeek(currentWeekItem.id);
        }
        setFieldValue('selectedWeek', currentWeekItem.id);
        setFieldValue('includeDate', currentWeekItem.start);
      }
    }
  });

  const start = startOfWeek(new Date(date), {
    weekStartsOn: dayOfWeek as IDayOfWeek,
  });

  const end = endOfWeek(new Date(date), {
    weekStartsOn: dayOfWeek as IDayOfWeek,
  });

  weekDates = {
    start: formatDate(start),
    end: formatDate(end),
  };
  const formattedStartDate = new Date(weekDates.start)
    .toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    })
    .replace(/,/g, '');
  const formattedEndDate = new Date(weekDates.end)
    .toLocaleDateString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    })
    .replace(/,/g, '');

  const openAlert = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const onCloseAlert = () => {
    bottomSheetRef.current?.close();
  };

  const onDayPress = (day: DateData) => {
    setDate(day.dateString);
    onCloseAlert();
  };

  return {
    openAlert,
    onCloseAlert,
    snapPoints,
    bottomSheetRef,
    formattedStartDate,
    formattedEndDate,
    onDayPress,
    viewabilityConfig,
    onViewableItemsChanged,
    dateRef,
    weeks,
    date,
  };
};
