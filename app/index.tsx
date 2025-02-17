import { CustomButton } from "@/components/CustomButton";
import { images } from "@/constants";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex w-full h-full items-center justify-center px-4">
          <Image
            source={images.logo}
            className="w-[115px] h-[34.07px]"
            resizeMode="contain"
          />

          <Image source={images.cards} className="w-[375px] h-[298px]" />

          <View className="relative mt-5">
            <Text className="text-white text-4xl font-bold text-center">
              Discover Endless Possibilities with
              <Text className="text-secondary"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[65px] h-[13.69px] absolute right-0 -bottom-2"
            />
          </View>

          <Text className="text-white text-center mt-5">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            isLoading={false}
            title="Continue with Email"
            handlePress={() => router.push("/register")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
