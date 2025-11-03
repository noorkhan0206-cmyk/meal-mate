import React, {memo} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {useStyle} from '@hooks/useStyle';
import {Colours} from '@theme/colors';
import AnimatedButtonWrapper from '../AnimatedButtonWrapper';
import ButtonLoading from './subcomponents/ButtonLoading';
import {IButtonProps} from './types';
import styles from './style';

const Button = ({
  backgroundColor = Colours.blueMain,
  borderColor = Colours.blueMain,
  buttonText,
  buttonWidth = 'auto',
  fontSize = 16,
  isWaiting,
  onPress,
  pressedBackgroundColor = Colours.blueDarkerMain,
  style,
  ...pressableProps
}: IButtonProps) => {
  const computedStyles = useStyle(
    styles,
    fontSize,
    isWaiting,
    pressedBackgroundColor,
    backgroundColor,
    buttonWidth,
    borderColor,
  );
  const mergedStyle = ({
    pressed,
  }: {
    pressed: boolean;
  }): StyleProp<ViewStyle> => ({
    ...computedStyles.buttonContainer,
    ...(pressed ? computedStyles.pressed : {}),
    ...style,
  });
  return (
    <AnimatedButtonWrapper disabled={false}>
      <Pressable onPress={onPress} style={mergedStyle} {...pressableProps}>
        <View style={computedStyles.titleContainer}>
          {isWaiting ? (
            <ButtonLoading
              isTransparent={true}
              isVisible={isWaiting ? true : false}
            />
          ) : null}
          <Text style={computedStyles.buttonText}>{buttonText}</Text>
        </View>
      </Pressable>
    </AnimatedButtonWrapper>
  );
};

export default memo(Button);
