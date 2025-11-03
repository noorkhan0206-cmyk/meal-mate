import React from 'react';
import {Text, View} from 'react-native';
import Icon from '@components/atoms/Icon';
import {useStyle} from '@hooks/useStyle';
import {IPasswordRequirementsProps} from './types';
import styles from './style';

const PasswordRequirements = ({
  iconColor,
  iconName,
  message,
  textColor,
}: IPasswordRequirementsProps) => {
  const computedStyles = useStyle(styles, textColor, iconColor);
  return (
    <View style={computedStyles.container}>
      <Icon
        name={iconName}
        fill={computedStyles.iconColour.color}
        width={20}
        height={20}
      />
      <View style={computedStyles.textContainer}>
        <Text style={computedStyles.text}>{message}</Text>
      </View>
    </View>
  );
};

export default PasswordRequirements;
