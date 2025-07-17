import React from 'react';
import {Text, View} from 'react-native';
import {number, string} from 'prop-types';

import style from './style';

const Header = ({title, type, color, numberOfLines}) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  return (
    <View>
      <Text
        style={[styleToApply(type), color && {color}]}
        numberOfLines={numberOfLines ?? null}>
        {title}
      </Text>
    </View>
  );
};

Header.propTypes = {
  title: string,
  type: number,
  color: string,
  numberOfLines: number,
};

Header.defaultProps = {
  title: '',
  type: 1,
  color: '#000',
};

export default Header;
