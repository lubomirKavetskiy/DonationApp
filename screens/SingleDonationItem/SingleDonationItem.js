import React from 'react';
import {useSelector} from 'react-redux';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

// Components
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';

// Styles
import style from './style';
import globalStyles from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const {bgWhite, flex} = globalStyles;

  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const {categoryInfo} = route.params;

  return (
    <SafeAreaView style={[bgWhite, flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Image
          source={{uri: donationItemInformation?.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInfo?.name} />
        </View>
        <Header title={donationItemInformation?.name} type={1} />
        <Text style={style.description}>
          {donationItemInformation?.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title="Donate" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
