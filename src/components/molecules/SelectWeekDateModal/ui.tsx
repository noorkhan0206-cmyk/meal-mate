import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import BottomSheetPopup from '@components/molecules/BottomSheetPopup';
import CloseButton from '@components/molecules/CloseButton';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {IWeeksPickerProps} from '@screens/RotaStack/ScheduleScreen/types';
import {windowWidth} from '@services/dimension';
import WeeksSection from '../WeeksSection';
import {ISelectWeekDateModalUIProps} from './types';
import styles from './style';

const SelectWeekDateModalUI = ({
  bottomSheetRef,
  date,
  dateRef,
  onCloseAlert,
  onDayPress,
  onViewableItemsChanged,
  openAlert,
  snapPoints,
  viewabilityConfig,
  weeks,
}: ISelectWeekDateModalUIProps) => {
  const theme = useTheme();
  const computedComponentStyle = useStyle(styles, theme);

  const renderItem = useCallback(
    ({index, item}: {item: IWeeksPickerProps; index: number}) => {
      const onPressIconLeft = () => {
        dateRef.current?.scrollToIndex({
          animated: true,
          index: index - 1,
          viewOffset: 0,
        });
      };
      const onPressIconRight = () => {
        dateRef.current?.scrollToIndex({
          animated: true,
          index: index + 1,
          viewOffset: 0,
        });
      };
      return (
        <WeeksSection
          {...item}
          onPressLeft={onPressIconLeft}
          openAlert={openAlert}
          onPressRight={onPressIconRight}
        />
      );
    },
    [dateRef, openAlert],
  );
  return (
    <View>
      <FlatList
        ref={dateRef}
        data={weeks}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth}
        snapToStart={true}
        decelerationRate={'fast'}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig?.current}
      />

      <BottomSheetPopup snapPoints={snapPoints} bottomSheetRef={bottomSheetRef}>
        <View style={computedComponentStyle.buttonRow}>
          <Text style={computedComponentStyle.title}>Select date</Text>
          <CloseButton onPress={onCloseAlert} />
        </View>
        <View style={computedComponentStyle.calendarContainer}>
          <Calendar
            onDayPress={(day: DateData) => {
              onDayPress(day);
            }}
            enableSwipeMonths
            current={date}
            markedDates={{
              [date]: {selected: true, marked: true},
            }}
            firstDay={1} // show days from monday
            hideExtraDays
            showWeekNumbers={true}
            theme={{
              calendarBackground: theme.colors.card,
              backgroundColor: theme.colors.card,
              textInactiveColor: theme.colors.greyIcon,
              monthTextColor: theme.colors.text,
              dayTextColor: theme.colors.text,
            }}
          />
        </View>
      </BottomSheetPopup>
    </View>
  );
};

export default SelectWeekDateModalUI;
