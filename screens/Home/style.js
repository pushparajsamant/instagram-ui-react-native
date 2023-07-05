import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  notificationBubbleContainer: {
    width: horizontalScale(17),
    height: verticalScale(15),
    borderRadius: horizontalScale(10),
    backgroundColor: '#F35BAC',
    position: 'absolute',
    right: 0,
    top: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBubbleText: {
    fontSize: fontScale(8),
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: '600',
    color: '#FFF',
  },
  userStoryContainer: {
    paddingHorizontal: horizontalScale(28),
  },
  postContainer: {
    paddingHorizontal: 28,
    marginTop: 30,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(26),
    paddingVertical: verticalScale(30),
  },
  headerIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },
});

export default styles;
