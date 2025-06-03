import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {string} from 'prop-types';

// Utilities
import {horizontalScale} from '../../assets/styles/scaling';

// Styles
import style from './style';

const Badge = ({title, isInactive, onPress}) => {
  const [width, setWidth] = useState(0);
  const tabRef = useRef(null);

  const horizontalPadding = 12;
  const badgeWidth = {
    width: horizontalScale(horizontalPadding * 2 + width),
  };

  const handleTextLayout = event => {
    const {width: textWidth} = event.nativeEvent.lines[0];

    setWidth(textWidth);
  };

  return (
    <View style={[style.badge, badgeWidth]}>
      <Text ref={tabRef} onTextLayout={handleTextLayout} style={style.title}>
        {title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: string.isRequired,
};

export default Badge;
