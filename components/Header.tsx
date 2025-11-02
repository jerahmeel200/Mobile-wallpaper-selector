import { Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";
import { Text, TouchableOpacity, useWindowDimensions, View } from "react-native";

const navItems = [
  { name: "Home", path: "/", icon: "home-outline" },
  { name: "Browse", path: "/browse", icon: "grid-outline" },
  { name: "Favourites", path: "/favourites", icon: "heart-outline" },
  { name: "Settings", path: "/settings", icon: "settings-outline" },
];

export default function Header() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  if (!isDesktop) return null; // hide on mobile

  return (
    <View className="flex-row items-center justify-between px-8 py-4 border-b border-gray-200 bg-white">
      <Text className="text-xl font-bold text-red-500">Wallpaper Studio</Text>

      <View className="flex-row space-x-6">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} asChild>
            <TouchableOpacity
              className={`flex-row items-center space-x-1 ${
                pathname === item.path ? "text-black" : "text-gray-500"
              }`}
            >
              <Ionicons
                name={item.icon as any}
                size={20}
                color={pathname === item.path ? "black" : "gray"}
              />
              <Text
                className={`font-medium ${
                  pathname === item.path ? "text-black" : "text-gray-600"
                }`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}
