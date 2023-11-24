import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingMaps from "@/components/ListingMaps";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";

const Index = () => {
  const [category, setCategory] = useState<string>("Tiny Homes");

  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo as any, []);

  const onDataChanged = (category: string) => {
    // console.log("CHANGED_ : ", category);
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader OnCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} category={category} /> */}
      <ListingMaps listings={geoItems} />
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Index;
