import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useStyle} from '@hooks/useStyle';
import {ColorsProps} from '@theme/colors';
import {IListEmptyImageProps} from './types';
import styles from './style';

const ListEmptyImage = ({imageSource, text}: IListEmptyImageProps) => {
  const theme = useTheme();
  const computedStyles = useStyle(styles, theme as ColorsProps);
  return (
    <View style={computedStyles.container}>
      <Image source={imageSource} style={computedStyles.image} />
      <Text style={computedStyles.text}>{text}</Text>
    </View>
  );
};

export default ListEmptyImage;
