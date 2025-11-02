import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import "./global.css";

SplashScreen.preventAutoHideAsync();

// ✅ Create a separate inner layout that uses safe area
function LayoutContent() {
  const insets = useSafeAreaInsets();

  const topPadding = insets.top || StatusBar.currentHeight || 0;
  const bottomPadding =
    Platform.OS === "android"
      ? insets.bottom > 0
        ? insets.bottom
        : 20 // fallback for navigation bar
      : insets.bottom;

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingTop: topPadding,
        paddingBottom: bottomPadding,
      }}
    >
      <Header />
      <Sidebar />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#ef4444" />
      </View>
    );
  }

  return (
    // ✅ Safe area provider wraps the whole app
    <SafeAreaProvider>
      <LayoutContent />
    </SafeAreaProvider>
  );
}
