import CategoryGrid from '@/components/CategoryGrid';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  const isWeb = Platform.OS === 'web';

  return (
    <ScrollView className="flex-1 px-4 lg:px-12  bg-white">
      <View className="mt-[30px] lg:mt-8">
        {isWeb ? (
          // 🌐 Gradient Text for Web
          <Text
            className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold]  "
            style={{
              backgroundImage: 'linear-gradient(90deg, #FBB03B 0%, #EC0C43 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Discover Beautiful Wallpapers
          </Text>
        ) : (
          // 📱 Gradient Text for Mobile/Native
          <MaskedView
            maskElement={
              <Text className="text-[24px] lg:text-5xl font-[ClashDisplay_Bold] ">
                Discover Beautiful Wallpapers
              </Text>
            }
          >
            <LinearGradient
              colors={['#FBB03B', '#EC0C43']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} // horizontal gradient
            >
              <Text className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold] opacity-0 ">
                Discover Beautiful Wallpapers
              </Text>
            </LinearGradient>
          </MaskedView>
        )}

        <Text className="text-[#575757] mt-2 text-[16px] lg:text-[24px] w-[348px] lg:w-[870px] font-normal font-poppins">
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
