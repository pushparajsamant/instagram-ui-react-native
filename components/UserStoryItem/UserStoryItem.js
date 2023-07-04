import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

const UserStoryItem = props => {
  //console.log(props);
  return (
    <View style={styles.itemView}>
      <View style={styles.imageView}>
        <Image source={require('../../assets/images/default_profile.png')} />
      </View>
      <Text>{props.firstName}</Text>
    </View>
  );
};

export default UserStoryItem;
