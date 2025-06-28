import { Stack } from 'expo-router';
import { NewsProvider } from '../context/NewsContext';

export default function Layout() {
  return (
    <NewsProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </NewsProvider>
  );
}
