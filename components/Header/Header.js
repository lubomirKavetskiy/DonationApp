import React from 'react';
import {Text, View} from 'react-native';
import {number, string} from 'prop-types';

import style from './style';

const Header = ({title, types}) => {
  const styleToApply = () => {
    switch (types) {
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
      <Text style={styleToApply(types)}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: string,
  types: number,
};

Header.defaultProps = {
  title: '',
  types: 1,
};

export default Header;
