import { View } from "react-native";
import CategoryCard from "./CategoryCard";

export interface Category {
  id: string;           // ✅ add this
  title: string;
  desc: string;
  wallpapers: number;
  image: string;
}

const categories: Category[] = [
  {
    id: "1",
    title: "Nature",
    desc: "Mountains, Forest and Landscapes",
    wallpapers: 3,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: "2",
    title: "Abstract",
    desc: "Modern Geometric and artistic designs",
    wallpapers: 4,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
  {
    id: "3",
    title: "Urban",
    desc: "Cities, architecture and street",
    wallpapers: 6,
    image: "https://images.unsplash.com/photo-1486308510493-aa64833634ef",
  },
  {
    id: "4",
    title: "Space",
    desc: "Cosmos, planets, and galaxies",
    wallpapers: 3,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  },
  {
    id: "5",
    title: "Minimalist",
    desc: "Clean, simple, and elegant",
    wallpapers: 6,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: "6",
    title: "Animals",
    desc: "Wildlife and nature photography",
    wallpapers: 4,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

export default function CategoryGrid() {
  return (
    <View className="flex flex-wrap flex-row justify-between mt-4">
      {categories.map((item) => (
        <CategoryCard key={item.id} category={item} />
      ))}
    </View>
  );
}
