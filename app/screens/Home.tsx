import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Colors from '../../assets/Color';
import { useTheme } from '../../context/ThemeContext';
import GlobalAPI from '../../Services/GlobalAPI';
import { Article } from '../../types';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';

const Home = () => {
  const [newsList, setNewsList] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { theme, toggleTheme } = useTheme();
  const Color = Colors[theme];

  useEffect(() => {
    getNewsByCategory('Latest');
  }, []);

  const getNewsByCategory = async (category: string) => {
    setLoading(true);
    const response = await GlobalAPI.getByCategory(category);
    if (response.ok && response.data) {
      setNewsList(response.data.articles);
    } else {
      console.error('Failed to fetch news by category:', response.problem);
    }
    setLoading(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: Color.background }]}>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />

      {/* Sticky Header */}
      <View style={[styles.fixedHeader, { backgroundColor: Color.background }]}>
        <View style={styles.header}>
          <Text style={[styles.appName, { color: Color.primary }]}>Chirp News</Text>
          <Ionicons
            name={theme === 'light' ? 'moon' : 'sunny'}
            size={26}
            color={Color.text}
            onPress={toggleTheme}
          />
        </View>
        <CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)} />
      </View>

      {/* Loader or Content */}
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Color.primary} />
        </View>
      ) : (
        <FlatList
          data={[]} // dummy
          renderItem={null}
          ListHeaderComponent={
            <>
              <TopHeadlineSlider newsList={newsList} />
              <View style={[styles.separator, { backgroundColor: Color.lightGray }]} />
            </>
          }
          ListFooterComponent={<HeadlineList newsList={newsList} />}
          contentContainerStyle={styles.scrollArea}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

//style sheet is static so all color changes accroding to theme are done directly on the component styles
//sos we do inline styles for dynamic colors
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fixedHeader: {
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
  },
  separator: {
    height: 1.5,
    marginVertical: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;