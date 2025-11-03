import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '@components/atoms/Icon';
import {useStyle} from '@hooks/useStyle';
import {IThemeButtonProps} from './types';
import styles from './style';

const ThemeButton = ({onPress, title}: IThemeButtonProps) => {
  const computedStyles = useStyle(styles);
  return (
    <View style={computedStyles.container}>
      <TouchableOpacity style={computedStyles.iconContainer} onPress={onPress}>
        <Icon name={'circleCheck'} width={25} height={25} fill={'#FD4C6C'} />
      </TouchableOpacity>

      <Text style={computedStyles.text}>{title}</Text>
    </View>
  );
};

export default ThemeButton;
