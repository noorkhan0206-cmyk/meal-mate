import React from 'react';
import {Pressable} from 'react-native';
import Icon from '@components/atoms/Icon';
import AnimatedButtonWrapper from '@components/molecules/AnimatedButtonWrapper';
import {useStyle} from '@hooks/useStyle';
import {Colours} from '@theme/colors';
import {ITabButtonProps} from './types';
import styles from './style';

const TabButton = ({iconName, onPress}: ITabButtonProps) => {
  const computedStyles = useStyle(styles);
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
          computedStyles.buttonContainer,
        ]}>
        <Icon name={iconName} fill={'white'} width={30} height={30} />
      </Pressable>
    </AnimatedButtonWrapper>
  );
};

export default TabButton;
