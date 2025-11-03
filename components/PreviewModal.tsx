import type { FC } from "react";
import {
  Image,
  Modal,
  ScrollView,
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

type PreviewModalProps = {
  visible?: boolean;
  item: Wallpaper | null;
  onClose: () => void;
  isInline?: boolean;
};

const PreviewModal: FC<PreviewModalProps> = ({
  visible = false,
  item,
  onClose,
  isInline = false,
}) => {
  if (!item) return null;

  const content = (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className="items-center mb-6">
        <Image
          source={item.image}
          className="w-64 h-[400px] rounded-3xl"
          resizeMode="cover"
        />
      </View>

      <Text className="text-xl font-semibold text-gray-800 mb-1">
        Preview
      </Text>
      <Text className="text-lg font-medium text-gray-700 mb-3">{item.name}</Text>

      <View className="flex-row flex-wrap mb-4">
        {item.tags.map((tag) => (
          <View
            key={tag}
            className="px-3 py-1 border border-gray-300 rounded-full mr-2 mb-2"
          >
            <Text className="text-xs text-gray-600">{tag}</Text>
          </View>
        ))}
      </View>

      <Text className="text-sm text-gray-500 mb-6 leading-relaxed">
        Discover the pure beauty of “Natural Essence” — your gateway to
        authentic, nature-inspired experiences. Let this unique collection
        elevate your senses and connect you with the unrefined essence of
        nature.
      </Text>

      <View className="flex-row space-x-3">
        <TouchableOpacity className="flex-1 px-4 py-3 border border-gray-300 rounded-full items-center">
          <Text className="text-gray-700 font-medium">♡ Save to Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 px-4 py-3 bg-amber-500 rounded-full items-center">
          <Text className="text-white font-medium">Set to Wallpaper</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  if (isInline) return content;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/70 justify-center items-center">
        <View className="w-[92%] h-[90%] bg-white rounded-3xl p-4">
          <TouchableOpacity
            onPress={onClose}
            className="self-end mb-3 p-2 border border-gray-200 rounded-full"
          >
            <Text className="text-lg text-gray-600">✕</Text>
          </TouchableOpacity>
          {content}
        </View>
      </View>
    </Modal>
  );
};

export default PreviewModal
