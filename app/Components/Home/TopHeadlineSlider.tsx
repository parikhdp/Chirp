import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import GlobalAPI from '../../../Services/GlobalAPI'

const TopHeadlineSlider = () => {
  
  useEffect(() => {
    getTopHeadlines();
  },[])

  const getTopHeadlines = async () => {
    const result=(await GlobalAPI.getTopHeadline()).data;
    console.log(result);
    }
  

  return (
    <View>
         <Text>Headline</Text> 
      </View>
  )
}

export default TopHeadlineSlider
