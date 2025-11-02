import { ImageBackground, Text, View } from 'react-native';
import { Category } from './CategoryGrid';

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <ImageBackground
      source={{ uri: category.image }}
      className="w-full sm:w-[48%] lg:w-[32%] h-48 rounded-2xl overflow-hidden mb-4"
      resizeMode="cover"
    >
      <View className="flex-1 justify-end p-4 bg-black/30">
        <Text className="text-white font-bold text-lg">{category.title}</Text>
        <Text className="text-white/80 text-sm">{category.desc}</Text>
        <Text className="text-white/70 text-xs mt-1">{category.wallpapers} wallpapers</Text>
      </View>
    </ImageBackground>
  );
}
