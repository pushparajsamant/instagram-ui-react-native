import React from 'react';
import {Image, View} from 'react-native';
import styles from '../UserProfileImage/styles';

const UserProfileImage = () => {
  return (
    <View style={styles.imageView}>
      <Image source={require('../../assets/images/default_profile.png')} />
    </View>
  );
};
export default UserProfileImage;
