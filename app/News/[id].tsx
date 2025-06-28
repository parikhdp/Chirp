import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>{article.author}</Text>
      <Text style={styles.content}>{article.content}</Text>
      <Text style={styles.source}>Source: {article.source.name}</Text>
      <Text style={styles.date}>Published: {article.publishedAt}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
  },
  author: {
    fontStyle: 'italic',
    marginTop: 4,
    color: '#666',
  },
  content: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
  },
  source: {
    marginTop: 12,
    fontWeight: '500',
  },
  date: {
    marginTop: 4,
    color: '#888',
  },
});
