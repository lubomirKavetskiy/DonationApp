import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import globalStyles from '../../assets/styles/globalStyle';
import style from './style';

// Components
import Header from '../../components/Header/Header';
import {resetUserState} from '../../redux/reducers/User';
import Search from '../../components/Search/Search';
import {FlatList} from 'react-native-gesture-handler';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = () => {
  const {bgWhite, flex} = globalStyles;

  const {firstName, lastName, profileImage} =
    useSelector(state => state.user) ?? {};
  const categories = useSelector(state => state.categories) ?? {};

  const dispatch = useDispatch();
  dispatch(resetUserState());

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  const pagination = ({items, pageNumber, pageSize}) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination({
        items: categories.categories,
        pageNumber: categoryPage,
        pageSize: categoryPageSize,
      }),
    );
    setCategoryPage(prevPage => prevPage + 1);
    setIsLoadingCategories(false);
  }, []);

  return (
    <SafeAreaView style={[bgWhite, flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntoText}>Hello,</Text>
            <View style={style.userName}>
              <Header
                title={`${firstName} ${lastName[0]}. 👋`}
                type={1}
                color="#000"
              />
            </View>
          </View>
          <View style={style.profileImageContainer}>
            <Image
              source={profileImage}
              style={style.profileImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageWrapper}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            style={style.highlightedImage}
            resizeMode="contain"
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title="Select Category" type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }

              setIsLoadingCategories(true);
              const newData = pagination({
                items: categories.categories,
                pageNumber: categoryPage,
                pageSize: categoryPageSize,
              });

              if (newData.length > 0) {
                setCategoryList(prevList => [...prevList, ...newData]);
                setCategoryPage(prevPage => prevPage + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={value => {
                    dispatch(updateSelectedCategoryId({categoryId: value}));
                  }}
                />
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
