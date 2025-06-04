import {StyleSheet} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
    paddingHorizontal: horizontalScale(12),
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    marginLeft: horizontalScale(8),
    height: '100%',
  },
  searchIcon: {
    color: '#12C0FF',
    fontSize: scaleFontSize(22),
  },
});

export default style;
