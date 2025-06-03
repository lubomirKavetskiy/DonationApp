import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import globalStyles from '../../assets/styles/globalStyle';
import style from './style';

// Components
import Header from '../../components/Header/Header';
import Badge from '../../components/Badge/Badge';

const Home = () => {
  const {bgWhite, flex} = globalStyles;
  return (
    <SafeAreaView style={[bgWhite, flex]}>
      <Header title="Test11" types={1} />
      <Badge title="Badge" />
      <FontAwesomeIcon
        icon={faSearch}
        size={24}
        color="black"
        style={style.icon}
      />
    </SafeAreaView>
  );
};

export default Home;
