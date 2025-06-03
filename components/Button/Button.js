import React from 'react';
import {Pressable, Text} from 'react-native';
import {bool, func, string} from 'prop-types';

// Styles
import style from './style';

const Button = ({title, isDisabled, onPress}) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button, isDisabled && style.disabled]}
      onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

Button.propTypes = {
  title: string.isRequired,
  isDisabled: bool,
  onPress: func,
};

Button.defaultProps = {
  isDisabled: false,
  onPress: () => {},
};

export default Button;
