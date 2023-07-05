import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import styles from './style';

const ProfilePhotosTab = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.profilePhotoTabContainer}>
      <View style={styles.photosRow}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.photosRow}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.photosRow}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
      </View>
      <View style={[styles.photosRow, {marginBottom: 20}]}>
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
        <Image
          resizeMode={'contain'}
          source={require('../../assets/images/default_post.png')}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};
export default ProfilePhotosTab;
