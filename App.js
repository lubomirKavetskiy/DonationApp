import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './android/app/src/main/assets/custom/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontFamily: getFontFamily('Inter', '900'),
          fontSize: 60,
        }}>
        Hello12e
      </Text>
    </SafeAreaView>
  );
};

export default App;
