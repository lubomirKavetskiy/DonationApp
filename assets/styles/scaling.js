import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

const isSmallDevice = SCREEN_WIDTH < 375 && !DeviceInfo.hasNotch();

const guideLineBaseWidth = () => {
  if (isSmallDevice) {
    return 330;
  }
  return 350;
};

const horizontalScale = size => (SCREEN_WIDTH / guideLineBaseWidth()) * size;

const guideLineBaseHeight = () => {
  if (isSmallDevice) {
    return 550;
  } else if (SCREEN_WIDTH >= 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (SCREEN_HEIGHT / guideLineBaseHeight()) * size;

const guideLineBaseFontSize = () => {
  if (SCREEN_WIDTH > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = size =>
  Math.round(size * (SCREEN_WIDTH / guideLineBaseFontSize()));

export {horizontalScale, verticalScale, scaleFontSize};
