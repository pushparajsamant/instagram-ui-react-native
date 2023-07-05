import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  profilePhotoTabContainer: {
    flex: 1,
    paddingTop: verticalScale(10),
    backgroundColor: '#FFFFFF',
  },
  photosRow: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(21),
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  image: {
    maxWidth: horizontalScale(150),
    maxHeight: verticalScale(90),
  },
});

export default styles;
