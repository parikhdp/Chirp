import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../../../assets/Color';
import GlobalAPI from '../../../Services/GlobalAPI';
import { Article } from '../../../types';

const TopHeadlineSlider = () => {
  const [newsList, setNewsList] = useState<Article[]>([]);
  useEffect(() => {
    getTopHeadlines();
  }, [])

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
      <FlatList
        data={newsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageCard}>
            <Image source={{ uri: item.urlToImage }} style={styles.image} />
            <Text style={styles.heading} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.source}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  imageCard: {
    width: Dimensions.get('screen').width * 0.8,
    marginRight: 12,
  },
  image: {
    height: Dimensions.get('screen').width * 0.75,
    borderRadius: 10,
    width: '100%',
  },
  heading:
    {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 10,
    },
    source: {
      fontSize: 16,
      marginTop:5,
      color:Color.primary
    }
  });

export default TopHeadlineSlider
