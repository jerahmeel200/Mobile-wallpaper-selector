import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
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
      className="w-full sm:w-[48%] lg:w-[32%] rounded-[26px] overflow-hidden mb-4"
    >
      {/* Image Container */}
      <View className="relative w-full h-[220px] sm:h-[250px] lg:h-[290px] rounded-[26px] overflow-hidden">
        <Image
          source={category.image}
          resizeMode="cover"
          className="w-full h-full"
        />

        {/* Overlay Texts */}
        <View className="absolute inset-0 flex-1 justify-end p-4">
          <Text className="text-white font-bold text-[20px] md:text-[24px] font-poppins">
            {category.title}
          </Text>
          <Text className="text-white/80 text-[14px] md:text-[16px] font-poppins">
            {category.desc}
          </Text>

          <View className="mt-2 self-start rounded-[30px] overflow-hidden">
            <BlurView
              intensity={40}
              tint="dark"
              className="px-[10px] rounded-lg bg-white/20 border border-white/20 py-[6px] md:py-[8px]"
            >
              <Text className="text-white text-[12px] md:text-[14px] font-poppins">
                {category.wallpapers} wallpapers
              </Text>
            </BlurView>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
