import { create } from 'apisauce';
import Constants from 'expo-constants';

const api = create({
  baseURL: 'https://newsapi.org/v2',
});

const API_KEY = Constants.expoConfig?.extra?.API_KEY;

const getTopHeadline=() =>
    api.get(`/top-headlines?sources=bbc-news&apiKey=${API_KEY}`);
 //if its just a constant then it is executed when file is imported, its possible that api key isnt loaded till then so use it as a fucntion
export default {
  getTopHeadline,
};
