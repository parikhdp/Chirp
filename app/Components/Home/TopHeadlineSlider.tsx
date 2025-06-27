import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import GlobalAPI from '../../../Services/GlobalAPI';
import { Article } from '../../../types';

const TopHeadlineSlider = () => {
 const [newsList, setNewsList] = useState<Article[]>([]);
  useEffect(() => {
    getTopHeadlines();
  },[])

  const getTopHeadlines = async () => {
    const response = await GlobalAPI.getTopHeadline();
    if (response.ok && response.data) {
      setNewsList(response.data.articles);
    } else {
      console.error('Failed to fetch headlines:', response.problem);
    }
  };
  return (
    <View>
         <Text>Headline</Text> 
      </View>
  )
}

export default TopHeadlineSlider
