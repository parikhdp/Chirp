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
import Color from '../../../assets/Color';
import { useNews } from '../../../context/NewsContext';
import { Article } from '../../../types';

type Props = {
  newsList: Article[];
};

const HeadlineList = ({ newsList }: Props) => {
  const { setArticles } = useNews();

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
              <TouchableOpacity style={styles.imageCard}>
                <Image source={{ uri: item.urlToImage }} style={styles.image} />
                <View style={styles.textbox}>
                  <Text style={styles.heading} numberOfLines={4}>
                    {item.title}
                  </Text>
                  <Text style={styles.source}>{item.source.name}</Text>
                </View>
              </TouchableOpacity>
            </Link>
            <View style={styles.separator} />
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
    color: Color.primary,
  },
  separator: {
    height: 1,
    backgroundColor: Color.lightGray,
    marginTop: 10,
  },
});

export default HeadlineList;
