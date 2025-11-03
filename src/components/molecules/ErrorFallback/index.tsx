import React from 'react';
import {Image, Modal, Text, View, useWindowDimensions} from 'react-native';
import {useStyle} from '@hooks/useStyle';
import {ErrorMessage} from './types';
import styles from './style';
const ErrorSCreenImage = require('@assets/images/ErrorFallback.png');

const ErrorFallback = () => {
  const {height: windowHeight, width: windowWidth} = useWindowDimensions();
  const computedStyle = useStyle(styles, windowWidth, windowHeight);
  return (
    <Modal visible={true}>
      <View style={[computedStyle?.errorScreenContainer]}>
        <Image
          style={[computedStyle.errorScreenImage]}
          source={ErrorSCreenImage}
        />
        <Text style={[computedStyle?.errorScreenTitle]}>
          {ErrorMessage.title}
        </Text>
        <Text style={[computedStyle?.errorSreenDescription]}>
          {ErrorMessage.description}
        </Text>
      </View>
    </Modal>
  );
};

export default ErrorFallback;
