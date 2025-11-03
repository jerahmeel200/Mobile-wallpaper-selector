import type { FC } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  type ImageSourcePropType,
} from "react-native";

type Wallpaper = {
  id: number;
  name: string;
  tags: string[];
  image: ImageSourcePropType;
};

type WallpaperCardProps = {
  data: Wallpaper;
  onPress?: () => void;
};

const WallpaperCard: FC<WallpaperCardProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className="relative rounded-3xl overflow-hidden bg-gray-100"
      style={{ aspectRatio: 0.75 }}
    >
      <Image
        source={data.image}
        className="absolute inset-0 h-[290.71px] w-[190.18px]"
        resizeMode="cover"
      /> 

      {/* Overlay gradient */}
      <View className="absolute inset-0 " />

      {/* Heart icon */}
      <View className="absolute top-3 right-3 z-10">
        <View className="bg-white/90 rounded-full w-8 h-8 items-center justify-center">
          <Text className="text-base text-gray-700">♡</Text>
        </View>
      </View>

      {/* Bottom text */}
      <View className="absolute bottom-0 left-0 right-0 p-3">
        <Text className="text-white text-lg font-semibold">{data.name}</Text>
        <View className="flex-row flex-wrap gap-1 mt-1">
          {data.tags.map((tag) => (
            <View key={tag} className="bg-white/30 rounded-full px-2 py-0.5">
              <Text className="text-xs text-white">{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WallpaperCard;
