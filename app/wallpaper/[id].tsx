import PreviewModal from "@/components/PreviewModal";
import PreviewSection from "@/components/PreviewSection";
import WallpaperCard from "@/components/WallpaperCard";
import { useState } from "react";
import {
  ScrollView,
  Text,
  useWindowDimensions,
  View,
  type ImageSourcePropType,
} from "react-native";

type Wallpaper = {
  id: number;
  name: string;
  tags: string[];
  image: ImageSourcePropType;
};

const wallpapers = [
  {
    id: 1,
    name: "Nature 1",
    tags: ["Nature", "Ambience", "Flowers"],
    image: require("@/assets/images/nature1.jpg"),
  },
  {
    id: 2,
    name: "Nature 2",
    tags: ["Nature"],
    image: require("@/assets/images/nature2.jpg"),
  },
  {
    id: 3,
    name: "Nature 3",
    tags: ["Nature"],
    image: require("@/assets/images/nature3.jpg"),
  },
  {
    id: 4,
    name: "Nature 4",
    tags: ["Nature"],
    image: require("@/assets/images/nature4.jpg"),
  },
];

export default function WallpaperDetails() {
  const { width } = useWindowDimensions();
  const [selected, setSelected] = useState<Wallpaper | null>(null);

  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  // ✅ Desktop Layout (Row with 3 cards per row)
  const renderDesktopLayout = () => (
    <ScrollView
      className="px-[47px]"
      contentContainerStyle={{
        flexDirection: "row",
        gap: 24,
        padding: 32,
        alignItems: "flex-start",
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Left: Wallpaper Grid */}
      <View className="w-1/2  rounded-3xl ">
        <View className="px-6 py-5  ">
          <Text className="text-3xl font-semibold text-gray-800">Nature</Text>
         
        </View>

        <View className="px-6 py-6">
          <View className="flex-row flex-wrap justify-between gap-y-5">
            {wallpapers.map((item) => (
              <View key={item.id} className="w-[31%]">
                <WallpaperCard data={item} onPress={() => setSelected(item)} />
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Right: Preview Panel */}
      <View className="w-1/2 bg-white rounded-3xl">
        <View className="flex-1 items-center justify-center p-6">
          <PreviewSection />
        </View>
      </View>
    </ScrollView>
  );

  // ✅ Tablet Layout (Column — grid above, preview below)
  const renderTabletLayout = () => (
    <ScrollView
      className="px-[47px]"
      contentContainerStyle={{
        flexDirection: "column",
        gap: 24,
        paddingVertical: 32,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Grid Section */}
      <View className=" rounded-3xl ">
        <View className="px-6 py-5  ">
          <Text className="text-3xl font-semibold text-gray-800">Nature</Text>
         
        </View>

        <View className="px-6 py-6">
          {/* ✅ 2 cards per row for tablet */}
          <View className="flex-row flex-wrap justify-between gap-y-5">
            {wallpapers.map((item) => (
              <View key={item.id} className="w-[48%]">
                <WallpaperCard data={item} onPress={() => setSelected(item)} />
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Preview Section below the grid */}
      <View className="bg-white rounded-3xl shadow-sm p-6">
        <PreviewSection />
      </View>
    </ScrollView>
  );

  // ✅ Mobile Layout (2 cards per row + modal)
  const renderMobileLayout = () => (
    <View className="flex-1 ">
      <View className="px-6 py-5  ">
        <Text className="text-3xl font-semibold text-gray-800">Nature</Text>
         
      </View>

      <ScrollView
        className="flex-1 px-6 py-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between gap-y-5">
          {wallpapers.map((item) => (
            <View key={item.id} className="w-[48%]">
              <WallpaperCard data={item} onPress={() => setSelected(item)} />
            </View>
          ))}
        </View>
      </ScrollView>

      <PreviewModal
        visible={!!selected}
        item={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );

  return (
    <View className="flex-1 bg-[#fafafa]">
      {isDesktop
        ? renderDesktopLayout()
        : isTablet
        ? renderTabletLayout()
        : renderMobileLayout()}
    </View>
  );
}
