import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from '@components/atoms/Icon';
import AnimatedButtonWrapper from '@components/molecules/AnimatedButtonWrapper';
import {useStyle} from '@hooks/useStyle';
import {ICloseButtonProps} from './types';
import styles from './style';

const CloseButton = ({onPress}: ICloseButtonProps) => {
  const computedStyle = useStyle(styles);
  return (
    <AnimatedButtonWrapper disabled={false}>
      <Pressable onPress={onPress}>
        <View
          style={{
            ...computedStyle.iconBackground,
          }}>
          <Icon name={'x'} width={20} height={20} fill="red" />
        </View>
      </Pressable>
    </AnimatedButtonWrapper>
  );
};

export default CloseButton;
