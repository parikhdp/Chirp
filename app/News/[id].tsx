import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../../assets/Color';
import { useNews } from '../../context/NewsContext';
import { useTheme } from '../../context/ThemeContext';

export default function ArticleScreen() {
  const { id } = useLocalSearchParams();
  const { articles } = useNews();
  const { theme,toggleTheme } = useTheme();
  const Color = Colors[theme];
  const index = parseInt(id as string, 10);
  const article = articles[index];

  if (!article) {
    return (
      <View style={[styles.container, { backgroundColor: Color.background }]}>
        <Text style={{ color: Color.text }}>Article not found.</Text>
      </View>
    );
  }

  const shareNews = () => {
    Share.share({
      message: `Check out this news article: ${article.title}\n\nRead more at ${article.url}`,
    });
  };

  return (
    <View style={[styles.outer, { backgroundColor: Color.background }]}>
       <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      {/* Sticky Header */}
      <View style={[styles.header, { backgroundColor: Color.background }]}>
        <Text style={[styles.appName, { color: Color.primary }]}>Chirp News</Text>
       <Ionicons
                   name={theme === 'light' ? 'moon' : 'sunny'}
                   size={26}
                   color={Color.text}
                   onPress={toggleTheme}
                 />
      </View>

      <View style={[styles.separator, { backgroundColor: Color.lightGray }]} />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Back & Share Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color={Color.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareNews}>
            <Ionicons name="share-outline" size={28} color={Color.text} />
          </TouchableOpacity>
        </View>

        <Image source={{ uri: article.urlToImage }} style={styles.image} />
        <Text style={[styles.title, { color: Color.text }]}>{article.title}</Text>
        <Text style={[styles.source, { color: Color.primary }]}>{article.source.name}</Text>
        <Text style={[styles.description, { color: Color.gray }]}>{article.description}</Text>
        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(article.url)}>
          <Text style={[styles.readMore, { color: Color.primary }]}>Read More</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 380,
    borderRadius: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  source: {
    fontSize: 16,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 30,
  },
  readMore: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  separator: {
    height: 1.5,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
