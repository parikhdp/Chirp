import { Stack } from 'expo-router';
import { NewsProvider } from '../context/NewsContext';
import { ThemeProvider } from '../context/ThemeContext';

export default function Layout() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </NewsProvider>
    </ThemeProvider>

  );
}
