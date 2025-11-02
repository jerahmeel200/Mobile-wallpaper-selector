import CategoryGrid from '@/components/CategoryGrid';
import { ScrollView, Text, View } from 'react-native';
 

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 px-4 lg:px-12 py-8 bg-white">
      <View className="mt-16 lg:mt-8">
        <Text className="text-3xl lg:text-5xl font-extrabold text-orange-600 font-poppins">
          Discover Beautiful Wallpapers
        </Text>
        <Text className="text-gray-600 mt-2 text-base lg:text-lg">
          Discover curated collections of stunning wallpapers. Browse by category, preview in full-screen, and set your favorites.
        </Text>
      </View>

      <View className="mt-8 flex-row justify-between items-center">
        <Text className="text-xl font-bold">Categories</Text>
        <Text className="text-gray-500">See All</Text>
      </View>

      <CategoryGrid />
    </ScrollView>
  );
}
