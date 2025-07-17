import {StyleSheet} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(8),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(4),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(8),
    marginHorizontal: horizontalScale(8),
    marginBottom: verticalScale(8),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(14),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
});

export default style;
