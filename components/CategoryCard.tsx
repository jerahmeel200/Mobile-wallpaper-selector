import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { Category } from "./CategoryGrid";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/wallpaper/[id]",
          params: { id: category.id },
        })
      }
      className="w-full sm:w-[48%] lg:w-[32%] h-[290.71px] rounded-[26px] overflow-hidden mb-4"
     
    >
      <ImageBackground
        source={{ uri: category.image }}
        className="flex-1"
        resizeMode="cover"
      >
        <View className="flex-1 justify-end p-4 bg-black/30">
          <Text className="text-white font-bold text-[24px] font-poppins">
            {category.title}
          </Text>
          <Text className="text-white/80 text-sm font-poppins text-[16px]">
            {category.desc}
          </Text>

          <View className="mt-1 self-start rounded-[30px] overflow-hidden">
            <BlurView
              intensity={40}
              tint="dark"
              className="px-[10px] rounded-lg bg-white/20 border border-white/20 py-[8px]"
            >
              <Text className="text-white text-[14px] font-poppins">
                {category.wallpapers} wallpapers
              </Text>
            </BlurView>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}
