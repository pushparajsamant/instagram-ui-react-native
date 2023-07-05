import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './style';

const ProfileTabTitle = props => {
  return (
    <Text
      style={[
        styles.title,
        {color: props.isFocused ? '#022150' : '#79869F'},
        {fontWeight: props.isFocused ? '500' : '400'},
      ]}>
      {props.title}
    </Text>
  );
};
ProfileTabTitle.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProfileTabTitle;
