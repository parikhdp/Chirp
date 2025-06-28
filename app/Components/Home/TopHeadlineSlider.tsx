import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../../../assets/Color';
import { Article } from '../../../types';

type Props = {
  newsList: Article[]; 
};

const TopHeadlineSlider = ({ newsList }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.url}
        renderItem={({ item, index }) => (
          <Link href={`/News/${index}`} asChild>
            <TouchableOpacity style={styles.imageCard}>
              <Image source={{ uri: item.urlToImage }} style={styles.image} />
              <Text style={styles.heading} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.source}>
                {item?.source?.name}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  imageCard: {
    width: Dimensions.get('screen').width * 0.8,
    marginRight: 12,
  },
  image: {
    height: Dimensions.get('screen').width * 0.75,
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  source: {
    fontSize: 16,
    marginTop: 5,
    color: Color.primary,
  },
});

export default TopHeadlineSlider;
