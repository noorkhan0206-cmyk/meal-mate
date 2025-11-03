import React from 'react';
import {Pressable} from 'react-native';
import Icon from '@components/atoms/Icon';
import {useStyle} from '@hooks/useStyle';
import {Colours} from '@theme/colors';
import {IInfoIconProps} from './types';
import styles from './style';

const InfoIcon = ({onPress}: IInfoIconProps) => {
  const computedStyle = useStyle(styles);
  return (
    <Pressable onPress={onPress} style={computedStyle.iconContainer}>
      <Icon name={'info'} width={20} height={20} fill={Colours.blueMain} />
    </Pressable>
  );
};

export default InfoIcon;
