import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

import globalStyles from '../../assets/styles/globalStyle';
import style from './style';

const Home = () => {
  const {bgWhite, flex} = globalStyles;
  return (
    <SafeAreaView style={[bgWhite, flex]}>
      <View>
        <Text>Home Screen45</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
