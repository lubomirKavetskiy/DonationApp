import React, {useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import {bool, func, number, string} from 'prop-types';

// Utilities
import {horizontalScale} from '../../assets/styles/scaling';

// Styles
import style from './style';

const Tab = ({title, isInactive, onPress, tabId}) => {
  const [width, setWidth] = useState(0);
  const tabRef = useRef(null);

  const horizontalPadding = 32;
  const tabWidth = {
    width: horizontalScale(horizontalPadding * 2 + width),
  };

  const handleTextLayout = event => {
    const {width: textWidth} = event.nativeEvent.lines[0];

    setWidth(textWidth);
  };

  return (
    <Pressable
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={() => onPress(tabId)}>
      <Text
        ref={tabRef}
        onTextLayout={handleTextLayout}
        style={[style.title, isInactive && style.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

Tab.propTypes = {
  title: string.isRequired,
  isInactive: bool,
  onPress: func,
  tabId: number.isRequired,
};

Tab.defaultProps = {
  isInactive: false,
  onPress: () => {},
};

export default Tab;
