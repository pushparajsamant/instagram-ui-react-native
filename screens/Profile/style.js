import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageBorder: {
    borderWidth: 1,
    paddingHorizontal: horizontalScale(4),
    borderColor: '#0150EC',
    borderRadius: horizontalScale(120),
  },
  profileImage: {
    width: horizontalScale(120),
    height: verticalScale(110),
  },
  username: {
    fontSize: fontScale(20),
    fontWeight: '500',
    color: '#022150',
    fontFamily: 'Inter',
    lineHeight: fontScale(24),
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  profileStats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: horizontalScale(20),
    marginHorizontal: horizontalScale(24),
    paddingHorizontal: horizontalScale(14),
  },
  profileStat: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(18),
    gap: verticalScale(5),
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  statValue: {
    fontWeight: '600',
    fontSize: fontScale(20),
    fontFamily: 'Inter',
  },
  statLabel: {
    color: '#777d7d',
    fontFamily: 'Inter',
  },
  divider: {
    borderTopWidth: 1,
    borderColor: '#E9EFF1',
    marginVertical: verticalScale(16),
    marginHorizontal: horizontalScale(28),
  },
  tabContainer: {
    height: '100%',
  },
});
export default styles;
