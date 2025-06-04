import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import globalStyles from '../../assets/styles/globalStyle';
import style from './style';

// Components
import Header from '../../components/Header/Header';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

const Home = () => {
  const {bgWhite, flex} = globalStyles;
  return (
    <SafeAreaView style={[bgWhite, flex]}>
      <SingleDonationItem
        uri={require('../../assets/images/cactus.jpg')}
        badgeTitle="Environment"
        donationTitle="Tree cactus"
        price={44}
      />
    </SafeAreaView>
  );
};

export default Home;
