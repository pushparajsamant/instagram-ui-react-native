import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/main';
import styles from './style';
import {ProfileTabNavigation} from '../../navigation/MainNavigator';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flexStyle]}>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageBorder}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.username}>Pushparaj Samant</Text>
        </View>
        <View style={styles.profileStats}>
          <View style={[styles.profileStat, styles.statBorder]}>
            <Text style={styles.statValue}>45</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={[styles.profileStat, styles.statBorder]}>
            <Text style={styles.statValue}>450</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.profileStat}>
            <Text style={styles.statValue}>450</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.tabContainer}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
