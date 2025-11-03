import React from 'react';
import {Pressable} from 'react-native';
import Icon from '@components/atoms/Icon';
import AnimatedButtonWrapper from '@components/molecules/AnimatedButtonWrapper';
import {IContinueButtonProps} from '@components/molecules/ContinueButton/types';
import {useStyle} from '@hooks/useStyle';
import {Colours} from '@theme/colors';
import styles from './style';

const CloseButton = ({onPress}: IContinueButtonProps) => {
  const computedStyle = useStyle(styles);
  return (
    <AnimatedButtonWrapper disabled={false}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? Colours.blueDarkerMain
              : Colours.blueMain,
          },
          computedStyle.iconBackground,
        ]}>
        <Icon name={'x'} width={20} height={20} fill="white" />
      </Pressable>
    </AnimatedButtonWrapper>
  );
};

export default CloseButton;
