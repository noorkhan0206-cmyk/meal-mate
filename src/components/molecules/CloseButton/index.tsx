import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from '@components/atoms/Icon';
import AnimatedButtonWrapper from '@components/molecules/AnimatedButtonWrapper';
import {IContinueButtonProps} from '@components/molecules/ContinueButton/types';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import styles from './style';

const CloseButton = ({onPress}: IContinueButtonProps) => {
  const computedStyle = useStyle(styles);
  const theme = useTheme();
  return (
    <AnimatedButtonWrapper disabled={false}>
      <Pressable onPress={onPress}>
        <View
          style={{
            ...computedStyle.iconBackground,
          }}>
          <Icon name={'x'} width={30} height={30} fill={theme.colors.text} />
        </View>
      </Pressable>
    </AnimatedButtonWrapper>
  );
};

export default CloseButton;
