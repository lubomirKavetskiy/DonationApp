import React from 'react';
import {func, number, string} from 'prop-types';
import {View, Image} from 'react-native';

import Header from '../Header/Header';
import Badge from '../Badge/Badge';

// Styles
import style from './style';

const SingleDonationItem = ({uri, badgeTitle, donationTitle, price}) => {
  return (
    <View style={style.container}>
      <View>
        <View style={style.badgeContainer}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={uri} style={style.image} resizeMode="contain" />
      </View>
      <View style={style.titleContainer}>
        <Header title={donationTitle} type={3} color="#0a043c" />
      </View>
      <View style={style.priceContainer}>
        <Header title={`$${price.toFixed(2)}`} type={3} color="#156cf7" />
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: string.isRequired,
  badgeTitle: func.isRequired,
  donationTitle: func.isRequired,
  price: number.isRequired,
};

export default SingleDonationItem;
