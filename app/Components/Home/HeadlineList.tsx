import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../../../assets/Color';
import { Article } from '../../../types';

type Props = {
  newsList: Article[];
};

const HeadlineList = ({ newsList }: Props) => {
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageCard}>
            <Image source={{ uri: item.urlToImage }} style={styles.image} />
            <View style={styles.textbox}>
              <Text style={styles.heading} numberOfLines={4}>{item.title}</Text>
              <Text style={styles.source}>{item?.source?.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageCard: {
    marginTop: 15,
    display: 'flex',
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
  heading:
  {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  source: {
    marginTop: 6,
    color: Color.primary
  }
});

export default HeadlineList
