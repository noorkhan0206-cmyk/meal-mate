import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon from '@components/atoms/Icon';
import {useStyle} from '@hooks/useStyle';
import useTheme from '@hooks/useTheme';
import {INavigationHeaderComponentProps} from './types';
import styles from './style';

const NavigationHeader = ({
  headerTitle,
  onPress,
  selfServeStage,
}: INavigationHeaderComponentProps) => {
  const theme = useTheme();
  const computedStyles = useStyle(styles, theme);
  return (
    <View style={computedStyles.topContainer}>
      <View style={computedStyles.header}>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
            computedStyles.iconBackground,
          ]}
          onPress={onPress}>
          <View style={computedStyles.backImageStyle}>
            <Icon
              name={'leftArrow'}
              fill={theme.colors.headerText}
              width={20}
              height={20}
            />
          </View>
        </Pressable>

        <Text style={computedStyles.siteName}>{headerTitle}</Text>
        <Text style={computedStyles.siteName}>{selfServeStage} / 10</Text>
      </View>
    </View>
  );
};

export default memo(NavigationHeader);
