import React, {memo} from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '@components/atoms/Icon';
import {useStyle} from '@hooks/useStyle';
import styles from './styles';

const BackButton = () => {
  const computedComponentStyle = useStyle(styles);
  const navigation = useNavigation();

  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        computedComponentStyle.backStyle,
      ]}
      onPress={() => {
        navigation.goBack();
      }}>
      <View style={computedComponentStyle.backImageStyle}>
        <Icon name={'leftArrow'} fill={'white'} width={20} height={20} />
      </View>
    </Pressable>
  );
};
export default memo(BackButton);
