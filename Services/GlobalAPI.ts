import { create } from 'apisauce';
import Constants from 'expo-constants';
import { NewsAPIResponse } from '../types';

const api = create({
  baseURL: 'https://newsapi.org/v2',
});

const getTopHeadline = () => {
  const API_KEY = Constants.expoConfig?.extra?.API_KEY;
  return api.get<NewsAPIResponse>(`/top-headlines?sources=bbc-news&apiKey=${API_KEY}`);
  //if its just a constant then it is executed when file is imported, its possible that api key isnt loaded till then so use it as a fucntion
}
const getByCategory = (category: string) => {
  const API_KEY = Constants.expoConfig?.extra?.API_KEY;
  return api.get<NewsAPIResponse>(`/everything?q=${category}&apiKey=${API_KEY}`);
};

export default {
  getTopHeadline,
  getByCategory,
};
