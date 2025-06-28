import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Color from '../../assets/Color';
import GlobalAPI from '../../Services/GlobalAPI';
import { Article } from '../../types';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';

const Home = () => {
  const [newsList, setNewsList] = useState<Article[]>([]);

  useEffect(() => {
    getTopHeadlines();
  }, []);

  const getTopHeadlines = async () => {
    const response = await GlobalAPI.getTopHeadline();
    if (response.ok && response.data) {
      setNewsList(response.data.articles);
    } else {
      console.error('Failed to fetch headlines:', response.problem);
    }
  };

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.fixedHeader}>
        <View style={styles.header}>
          <Text style={styles.appName}>Chirp News</Text>
          <Ionicons name="notifications-outline" size={26} color={Color.black} />
        </View>
        <CategoryTextSlider />
      </View>

      {/* Scrollable Content */} 
      {/*dummy flatlist instead of ScrollView as we dont want a scrollable content instead another scrollable content that will confuse React Native*/}
      <FlatList
        data={[]} // dummy
        renderItem={null}
        ListHeaderComponent={
          <>
            <TopHeadlineSlider newsList={newsList} />
            <View style={styles.separator} />
          </> //these stay before it
        }
        ListFooterComponent={<HeadlineList newsList={newsList} />}
        contentContainerStyle={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedHeader: {
    backgroundColor:Color.white,
    padding: 20,
    zIndex: 10,
  },
  scrollArea: {
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Color.primary,
  },
  separator: {
    height: 1.5,
    backgroundColor: Color.lightGray,
    marginVertical: 10,
  },
});

export default Home;
