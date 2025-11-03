import React, {memo} from 'react';
import {View, TextInputProps, useWindowDimensions} from 'react-native';
import CustomTextInput from '@components/atoms/CustomTextInput';
import Icon from '@components/atoms/Icon';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import styles from './style';

const SearchInput = (props: TextInputProps) => {
  const theme = useTheme();
  const {width: windowWidth} = useWindowDimensions();
  const computedComponentStyle = useStyle(styles, theme, windowWidth);

  return (
    <View style={computedComponentStyle.container}>
      <View style={computedComponentStyle.iconContainer}>
        <Icon name={'search'} fill={theme.colors.text} width={18} height={18} />
      </View>
      <CustomTextInput
        placeholder="Search"
        placeholderTextColor={theme.colors.placeholderText}
        blurOnSubmit={false}
        autoCorrect={false}
        autoComplete="off"
        {...props}
        editable
        style={computedComponentStyle.input}
      />
    </View>
  );
};

export default memo(SearchInput);
