import React from 'react';
import styles from '../UserStoryItem/style';
import {Image, View} from 'react-native';

const UserProfileImage = () => {
  return (
    <View style={styles.imageView}>
      <Image source={require('../../assets/images/default_profile.png')} />
    </View>
  );
};
