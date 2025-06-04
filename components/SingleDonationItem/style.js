import {StyleSheet} from 'react-native';

import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(160),
    height: verticalScale(160),
  },
  badgeContainer: {
    position: 'absolute',
    top: verticalScale(12),
    left: horizontalScale(12),
    zIndex: 1,
  },
  titleContainer: {
    marginTop: verticalScale(8),
    marginLeft: horizontalScale(8),
  },
  priceContainer: {
    marginTop: verticalScale(4),
    marginLeft: horizontalScale(8),
  },
});

export default style;
