import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FormField } from "@/components/FormField";
import { images } from "@/constants";
import { CustomButton } from "@/components/CustomButton";
import { Link } from "expo-router";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View
          className="flex w-full h-full justify-center px-4"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Image
            source={images.logo}
            className="w-[115px] h-[34.07px]"
            resizeMode="contain"
          />

          <Text className="text-white text-2xl font-psemibold mt-10 ">
            Register
          </Text>

          <FormField
            label="Username"
            value={form.username}
            placeholder="Enter your username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />

          <FormField
            label="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />

          <FormField
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Register"
            handlePress={() => {}}
            containerStyles="mt-7"
            isLoading={false}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/login"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
