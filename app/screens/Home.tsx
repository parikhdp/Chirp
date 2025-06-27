import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from '../../assets/Color';
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Chirp News</Text>
        <Ionicons name="notifications-outline" size={26} color={Color.black} />
      </View>
      <CategoryTextSlider />
      <TopHeadlineSlider/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Color.primary
  }
})
export default Home
