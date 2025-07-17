import React from 'react';
import {Pressable} from 'react-native';
import {bool, func} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

// Styles
import style from './style';

const BackButton = ({isDisabled, onPress}) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[isDisabled && style.disabled, style.container]}
      onPress={onPress}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.propTypes = {
  isDisabled: bool,
  onPress: func.isRequired,
};

BackButton.defaultProps = {
  isDisabled: false,
};

export default BackButton;
