import React from 'react';
import {
  Image,
  Modal,
  StatusBar,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {useStyle} from '@hooks/useStyle';
import {Colours} from '@theme/colors';
import {INoConnectionProps} from './types';
import styles from './style';
const NoConnectionImage = require('@assets/images/NoConnection.png');

const NoConnection = ({
  description,
  title,
  visible,
  ...rest
}: INoConnectionProps) => {
  const {height: windowHeight, width: windowWidth} = useWindowDimensions();
  const computedStyle = useStyle(styles, windowWidth, windowHeight);
  return (
    <Modal visible={visible} {...rest}>
      <StatusBar backgroundColor={Colours.blueMain} />
      <View style={computedStyle?.noConnectionContainer}>
        <Image
          style={[computedStyle.noConnectionImage]}
          source={NoConnectionImage}
        />
        <Text style={[computedStyle?.noConnectionTitle]}>
          {title ?? 'No Connection'}
        </Text>
        <Text style={[computedStyle?.noConnectionDescription]}>
          {description ??
            'No internet connection found. Please check your internet connection'}
        </Text>
      </View>
    </Modal>
  );
};

export default NoConnection;
