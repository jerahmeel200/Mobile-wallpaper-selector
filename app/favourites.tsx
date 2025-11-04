import GradientText from "@/components/GradientText";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const wallpapers = [
  { id: 1, title: "Nature 1", category: "Nature", image: require("../assets/images/nature1.jpg") },
  { id: 2, title: "Nature 2", category: "Nature", image: require("../assets/images/nature2.jpg") },
  { id: 3, title: "Nature 3", category: "Nature", image: require("../assets/images/nature3.jpg") },
  { id: 4, title: "Nature 4", category: "Nature", image: require("../assets/images/nature4.jpg") },
  { id: 5, title: "Nature 5", category: "Nature", image: require("../assets/images/nature5.jpg") },
  { id: 6, title: "Nature 6", category: "Nature", image: require("../assets/images/nature6.jpg") },
  { id: 7, title: "Nature 1", category: "Nature", image: require("../assets/images/nature1.jpg") },
  { id: 8, title: "Nature 2", category: "Nature", image: require("../assets/images/nature2.jpg") },
  { id: 9, title: "Nature 3", category: "Nature", image: require("../assets/images/nature3.jpg") },
  { id: 10, title: "Nature 4", category: "Nature", image: require("../assets/images/nature4.jpg") },
  { id: 11, title: "Nature 5", category: "Nature", image: require("../assets/images/nature5.jpg") },
  { id: 12, title: "Nature 6", category: "Nature", image: require("../assets/images/nature6.jpg") },
];

const SavedWallpapers = () => {
  // testing
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 80 }}
      showsVerticalScrollIndicator={false}
      className="px-[20px] lg:px-[47px] bg-white"  
    >
      {/* Header */}
      <View className="mt-[30px] lg:mt-8 mb-[50px]">
        <GradientText
          text="Saved Wallpaper"
          className="text-[24px] lg:text-[60px] font-[ClashDisplay_Bold]"
        />
        <Text className="text-[#575757] mt-2 text-[16px] lg:text-[24px] w-[348px] lg:w-[870px] font-normal font-poppins">
          Your saved wallpapers collection
        </Text>
      </View>

      {/* Grid Layout */}
      <View className="flex-row flex-wrap justify-between gap-y-6">
        {wallpapers.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="relative rounded-2xl overflow-hidden"
            style={{
              width: "48%", // mobile default
              maxWidth: 200,
              aspectRatio: 3 / 4,
            }}
          >
            <Image source={item.image} className="w-full h-full rounded-2xl" resizeMode="cover" />

            {/* Overlay */}
            <View className="absolute inset-0 bg-black/30 rounded-2xl" />

            {/* Heart icon */}
            <TouchableOpacity className="absolute top-2 right-2 bg-white p-2 rounded-full">
              <Ionicons name="heart" size={18} color="#ffb703" />
            </TouchableOpacity>

            {/* Text info */}
            <View className="absolute bottom-4 left-3">
              <Text className="text-white text-lg font-semibold">{item.title}</Text>
              <View className="bg-black/40 px-3 py-1 mt-1 rounded-full self-start">
                <Text className="text-white text-xs">{item.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SavedWallpapers;
