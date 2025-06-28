import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Article } from '../types';

type NewsContextType = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
};

const NewsContext = createContext<NewsContextType>({
  articles: [],
  setArticles: () => {},
});

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  return (
    <NewsContext.Provider value={{ articles, setArticles }}>
      {children}
    </NewsContext.Provider>
  );
};

//export default NewsContext;