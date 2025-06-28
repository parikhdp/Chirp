import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../assets/Color';
import { useTheme } from '../../../context/ThemeContext';

type CategoryTextSliderProps = {
  selectCategory: (category: string) => void;
};

const CategoryTextSlider: React.FC<CategoryTextSliderProps> = ({ selectCategory }) => {
  const [activeCategory, setActiveCategory] = React.useState(1); //by default id 1 is active
  const { theme } = useTheme();
  const Color = Colors[theme];

  const categories = [
    { id: 1, name: "Latest" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Health" },
    { id: 4, name: "Sports" },
    { id: 5, name: "Entertainment" },
    { id: 6, name: "Business" }
  ];

  const onCategoryClick = (id: number, name: string) => {
    setActiveCategory(id);
    selectCategory(name);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCategoryClick(item.id, item.name)}>
             <Text
              style={[
                item.id === activeCategory ? styles.selectedCategoryName : styles.categoryName,
                { color: item.id === activeCategory ? Color.primary : Color.text },]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '800',
    marginRight: 15,
  },
  selectedCategoryName: {
    fontSize: 20,
    fontWeight: '900',
    marginRight: 15,
  },
});

export default CategoryTextSlider;
