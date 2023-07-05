import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scale';

const styles = StyleSheet.create({
  imageView: {
    borderWidth: 1,
    borderRadius: horizontalScale(50),
    borderColor: '#F35BAC',
    marginVertical: verticalScale(10),
    resizeMode: 'cover',
  },
});

export default styles;
