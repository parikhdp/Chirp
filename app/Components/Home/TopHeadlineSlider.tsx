import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../assets/Color';
import { useTheme } from '../../../context/ThemeContext';
import { Article } from '../../../types';

type Props = {
  newsList: Article[]; 
};

const TopHeadlineSlider = ({ newsList }: Props) => {
  const { theme } = useTheme();
  const Color = Colors[theme];

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
              <Text style={[styles.heading, { color: Color.text }]} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={[styles.source, { color: Color.primary }]}>
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
  },
});

export default TopHeadlineSlider;
