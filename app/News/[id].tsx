import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../../assets/Color';
import { useNews } from '../../context/NewsContext';

export default function ArticleScreen() {
  const { id } = useLocalSearchParams();
  const { articles } = useNews();

  const index = parseInt(id as string, 10);
  const article = articles[index];

  if (!article) {
    return (
      <View style={styles.container}>
        <Text>Article not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.outer}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Chirp News</Text>
        <Ionicons name="notifications-outline" size={26} color={Color.black} />
      </View>
      <View style={styles.separator} />
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Back & Share Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color={Color.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="share-outline" size={28} color={Color.black} />
          </TouchableOpacity>
        </View>

        <Image source={{ uri: article.urlToImage }} style={styles.image} />
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.source}>{article.source.name}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.readMore}>Read More</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  header: {
    backgroundColor: Color.white,
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
    color: Color.primary,
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
    color: Color.primary,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: Color.gray,
    lineHeight: 30,
  },
  readMore: {
    fontSize: 16,
    marginTop: 10,
    color: Color.primary,
    fontWeight: 'bold',
  },
  separator: {
    height: 1.5,
    backgroundColor: Color.lightGray,
    marginTop: 10,
  },
});
