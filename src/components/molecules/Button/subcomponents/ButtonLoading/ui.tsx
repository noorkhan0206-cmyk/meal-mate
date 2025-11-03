import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useStyle} from '@hooks/useStyle';
import {Colours} from '@theme/colors';
import {IButtonLoadingProps} from './types';
import styles from './style';

const ButtonLoadingUI = ({isVisible}: IButtonLoadingProps) => {
  const computedComponentStyle = useStyle(styles);
  if (!isVisible) {
    return <></>;
  }
  return (
    <View style={computedComponentStyle.container}>
      <ActivityIndicator color={Colours.white} size={'small'} />
    </View>
  );
};

export default ButtonLoadingUI;
