import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {Pressable} from 'react-native';
import Icon from '@components/atoms/Icon';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {Colours} from '@theme/colors';
import {ISelectOptionProps} from './types';
import styles from './style';

const SelectOption = ({canPress, onPress, option}: ISelectOptionProps) => {
  const theme = useTheme();
  const {width: windowWidth} = useWindowDimensions();
  const computedStyles = useStyle(styles, theme, windowWidth);
  const firstLetter = option.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = option.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;
  return (
    <Pressable
      onPress={onPress}
      style={computedStyles.container}
      disabled={!canPress}>
      {option ? (
        <Text style={computedStyles.text}>{capitalizedWord}</Text>
      ) : (
        <Text style={computedStyles.text}>Select Option</Text>
      )}
      <View style={computedStyles.iconContainer}>
        <Icon
          name={'chevronRight'}
          width={15}
          height={15}
          fill={Colours.blueMain}
        />
      </View>
    </Pressable>
  );
};

export default SelectOption;
