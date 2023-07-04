import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PostItem from './components/PostItem/PostItem';
import style from './assets/styles/main';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStoryItem from './components/UserStoryItem/UserStoryItem';

const App = () => {
  const stories = [
    {
      id: 1,
      name: 'Pushparaj',
    },
    {
      id: 2,
      name: 'Ragini',
    },
    {
      id: 3,
      name: 'Anushka',
    },
    {
      id: 4,
      name: 'Sundaram',
    },
    {
      id: 5,
      name: 'Aryan',
    },
    {
      id: 6,
      name: 'Swarupa',
    },
    {
      id: 7,
      name: 'Neeraj',
    },
    {
      id: 8,
      name: 'Radhika',
    },
    {
      id: 9,
      name: 'Radhika1',
    },
    {
      id: 10,
      name: 'Radhika2',
    },
    {
      id: 11,
      name: 'Radhika3',
    },
    {
      id: 12,
      name: 'Radhika4',
    },
  ];
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jennifer',
      lastName: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 570,
      comments: 12,
      bookmarks: 60,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Spera',
      location: 'Boston, Massachusetts',
      likes: 100,
      comments: 8,
      bookmarks: 7,
      id: 3,
    },
    {
      firstName: 'Nata',
      lastName: 'Vacheishvili',
      location: 'New York, New York',
      likes: 300,
      comments: 18,
      bookmarks: 17,
      id: 4,
    },
    {
      firstName: 'Nicolas',
      lastName: 'Namoradze',
      location: 'Berlin, Germany',
      likes: 1240,
      comments: 56,
      bookmarks: 20,
      id: 5,
    },
  ];
  const [pageNumber, setPageNumber] = useState(0);
  const [postPageNumber, setPostPageNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pagination = isPost => {
    var items = isPost ? posts : stories;
    let startIndex = pageNumber * 4;
    let pageSize = 4;
    if (isPost) {
      pageSize = 2;
      startIndex = postPageNumber * 2;
    }
    if (startIndex > items.length) {
      setIsLoading(false);
      return [];
    }
    //console.log(pageNumber);
    if (isPost) {
      setPostPageNumber(postPageNumber + 1);
    } else {
      setPageNumber(pageNumber + 1);
    }
    setIsLoading(false);
    return items.slice(startIndex, startIndex + pageSize);
  };
  const [renderedItems, setRenderedItems] = useState(() => pagination(false));
  const [renderedPosts, setRenderedPosts] = useState(() => pagination(true));
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />
                <Pressable style={style.headerIcon}>
                  <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} />
                  <View style={styles.notificationBubbleContainer}>
                    <Text style={styles.notificationBubbleText}>2</Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (!isLoading) {
                      setIsLoading(true);
                    }
                    var newItems = pagination();
                    setRenderedItems([...renderedItems, ...newItems]);
                  }}
                  // Hide horizontal scroll indicator
                  showsHorizontalScrollIndicator={false}
                  // Set FlatList to display horizontally
                  horizontal={true}
                  // Pass in data to be rendered in FlatList
                  data={renderedItems}
                  // Define how each item should be rendered
                  renderItem={({item}) => (
                    <UserStoryItem firstName={item.name} />
                  )}
                />
              </View>
            </>
          );
        }}
        data={renderedPosts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.postContainer}>
            <PostItem item={item} />
          </View>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          let newItems = pagination(true);
          console.log(newItems);
          setRenderedPosts(prevState => [...prevState, ...newItems]);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  notificationBubbleContainer: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#F35BAC',
    position: 'absolute',
    right: 0,
    top: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBubbleText: {
    fontSize: 8,
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: '600',
    color: '#FFF',
  },
  userStoryContainer: {
    paddingHorizontal: 28,
  },
  postContainer: {
    paddingHorizontal: 28,
    marginTop: 30,
  },
});
export default App;
