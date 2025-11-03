import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import Icon from '@components/atoms/Icon';
import BottomSheetPopup from '@components/molecules/BottomSheetPopup';
import CloseButton from '@components/molecules/CloseButton';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {ISelectDateModalUIProps} from './types';
import styles from './style';

const SelectDateModalUI = ({
  bottomSheetRef,
  formattedEndDate,
  formattedStartDate,
  onCloseAlert,
  onDayPress,
  openAlert,
  selectedDate,
  snapPoints,
}: ISelectDateModalUIProps) => {
  const theme = useTheme();
  const computedComponentStyle = useStyle(styles, theme);

  return (
    <>
      <Pressable onPress={openAlert} style={computedComponentStyle.container}>
        <View style={computedComponentStyle.iconContainer}>
          <Icon
            fill={theme.colors.greyIcon}
            name={'schedule'}
            height={15}
            width={15}
          />
        </View>
        <Text style={computedComponentStyle.dateText}>
          {formattedStartDate}
        </Text>
        <Text style={computedComponentStyle.dateText}>-</Text>
        <Text style={computedComponentStyle.dateText}>{formattedEndDate}</Text>
      </Pressable>
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
            current={selectedDate}
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
    </>
  );
};

export default SelectDateModalUI;
