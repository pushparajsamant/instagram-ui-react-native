import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStoryItem = props => {
  //console.log(props);
  return (
    <View style={styles.itemView}>
      <UserProfileImage />
      <Text>{props.firstName}</Text>
    </View>
  );
};

export default UserStoryItem;
