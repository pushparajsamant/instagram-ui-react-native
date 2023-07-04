import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faEllipsisH,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';

const PostItem = ({item}) => {
  return (
    <View style={styles.mainCard}>
      <View style={styles.header}>
        <View style={styles.imageAndNameContainer}>
          <Image source={require('../../assets/images/default_profile.png')} />
          <View style={styles.nameContainer}>
            <Text style={{fontWeight: 'bold'}}>
              {item.firstName} {item.lastName}
            </Text>
            <Text>{item.location}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#CACDDE'} />
      </View>
      <View>
        <Image source={require('../../assets/images/default_post.png')} />
      </View>
      <View style={styles.footer}>
        <View style={styles.actionView}>
          <FontAwesomeIcon icon={faHeart} color={'#CACDDE'} />
          <Text>{item.likes}</Text>
        </View>
        <View style={styles.actionView}>
          <FontAwesomeIcon icon={faMessage} color={'#CACDDE'} />
          <Text>{item.comments}</Text>
        </View>
        <View style={styles.actionView}>
          <FontAwesomeIcon icon={faBookmark} color={'#CACDDE'} />
          <Text>{item.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    marginVertical: 20,
  },
  imageAndNameContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  mainCard: {
    marginHorizontal: 10,
  },
  actionView: {
    flexDirection: 'row',
    gap: 10,
  },
});
