import React, {memo} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useRememberUserHandler} from '@hooks/useRememberUserHandler';
import {useStyle} from '@hooks/useStyle';
import {useAppSelector} from '@store';
import {documentsSelector} from '@store/documents/selectors';
import styles from './style';

const Header = () => {
  const {rememberedUser} = useRememberUserHandler();
  const computedStyles = useStyle(styles);
  const profilePicture = useAppSelector(documentsSelector.getProfilePicture);

  const initial = rememberedUser ? rememberedUser?.connectName![0] : '';
  return (
    <View style={computedStyles.header}>
      <View style={computedStyles.rowContainer}>
        <View style={computedStyles.headerIcon}>
          {profilePicture ? (
            <FastImage
              source={{uri: `data:image/jpeg;base64,${profilePicture}`}}
              style={computedStyles.image}
            />
          ) : (
            <Text style={computedStyles.iconText}>{initial}</Text>
          )}
        </View>
        <View style={computedStyles.centerText}>
          <Text style={computedStyles.siteName}>
            Hello {rememberedUser?.connectName!}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(Header);
