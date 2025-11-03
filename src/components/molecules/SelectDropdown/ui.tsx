import React, {forwardRef, useCallback, useMemo} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import {BottomSheetFlatList, BottomSheetModal} from '@gorhom/bottom-sheet';
import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import Icon from '@components/atoms/Icon';
import BottomSheetPopup from '@components/molecules/BottomSheetPopup';
import CheckItem from '@components/molecules/CheckItem';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {windowWidth} from '@services/dimension';
import {IDropdownArrayData} from '@store/dropdowns/types';
import {Colours} from '@theme/colors';
import {ISelectDropdownUIProps} from './types';
import styles from './style';

const SelectDropdownUI = forwardRef(
  (
    {
      filteredOptions,
      handleChangeCategory,
      headerTitle,
      label,
      labelAccessor,
      openModal,
      search,
      searchPlaceholder,
      searchable,
      selectedOption,
      setSearch,
      showButton = true,
      valueAccessor,
    }: ISelectDropdownUIProps,
    ref: React.ForwardedRef<BottomSheetModal>,
  ) => {
    const theme = useTheme();
    const snapPoints = useMemo(() => ['60%', '80%'], []);
    const computedStyles = useStyle(styles, windowWidth, theme);

    const renderItem = useCallback(
      ({index, item}: {item: any; index: number}) => {
        return (
          <CheckItem
            titleStyle={{width: windowWidth / 1.25}}
            option={item[valueAccessor as keyof IDropdownArrayData]}
            title={item[labelAccessor as keyof IDropdownArrayData]}
            isSelected={
              selectedOption[valueAccessor as keyof typeof selectedOption]
            }
            onPress={() => handleChangeCategory(item)}
            key={index?.toString()}
          />
        );
      },
      [handleChangeCategory, labelAccessor, selectedOption, valueAccessor],
    );

    return (
      <View>
        {showButton ? (
          <Pressable onPress={openModal} style={[computedStyles.dropDownStyle]}>
            <View style={computedStyles.dropDownTextStyle}>
              <Text style={computedStyles.buttonStyle} numberOfLines={1}>
                {(selectedOption as IDropdownArrayData)?.Name || label}
              </Text>
            </View>
            <Icon
              name={'chevronDown'}
              width={20}
              height={20}
              fill={Colours.blueMain}
            />
          </Pressable>
        ) : null}
        <BottomSheetPopup
          snapPoints={snapPoints}
          bottomSheetRef={ref as React.RefObject<BottomSheetModalMethods>}>
          <View style={[computedStyles?.modalContainer]}>
            <View style={computedStyles.headerContainer}>
              {headerTitle && (
                <Text style={computedStyles?.headerTitle}>{headerTitle}</Text>
              )}
              {searchable && (
                <TextInput
                  style={computedStyles.dropDownSearch}
                  defaultValue={search}
                  onChangeText={setSearch}
                  placeholder={searchPlaceholder || 'Search'}
                  placeholderTextColor={theme.colors.text}
                />
              )}
            </View>
            <BottomSheetFlatList
              showsVerticalScrollIndicator={false}
              data={filteredOptions}
              ListFooterComponent={
                <View style={computedStyles.listFooterStyle} />
              }
              renderItem={renderItem}
            />
          </View>
        </BottomSheetPopup>
      </View>
    );
  },
);

export default SelectDropdownUI;
