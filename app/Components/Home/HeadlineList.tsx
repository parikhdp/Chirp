import { Link } from 'expo-router';
import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../assets/Color';
import { useNews } from '../../../context/NewsContext';
import { useTheme } from '../../../context/ThemeContext';
import { Article } from '../../../types';

type Props = {
  newsList: Article[];
};

const HeadlineList = ({ newsList }: Props) => {
  const { setArticles } = useNews();
  const { theme } = useTheme();
  const Color = Colors[theme];

  useEffect(() => {
    setArticles(newsList); // Store articles globally
  }, [newsList]);

  return (
    <View>
      <FlatList
        data={newsList}
        keyExtractor={(item) => item.url}
        renderItem={({ item, index }) => (
          <View>
            <Link href={`/News/${index}`} asChild>
              <TouchableOpacity style={styles.imageCard }>
                <Image source={{ uri: item.urlToImage }} style={styles.image} />
                <View style={styles.textbox}>
                  <Text style={[styles.heading, { color: Color.text }]} numberOfLines={4}>
                    {item.title}
                  </Text>
                  <Text style={[styles.source, { color: Color.primary }]}>{item.source.name}</Text>
                </View>
              </TouchableOpacity>
            </Link>
             <View style={[styles.separator, { backgroundColor: Color.lightGray }]} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageCard: {
    marginTop: 15,
    flexDirection: 'row',
  },
  image: {
    height: 130,
    width: 130,
    borderRadius: 10,
  },
  textbox: {
    marginLeft: 10,
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  source: {
    marginTop: 6,
  },
  separator: {
    height: 1,
    marginTop: 10,
  },
});

export default HeadlineList;
