import { icons } from "@/constants";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

interface FormFieldProps {
  label: string;
  value: string;
  placeholder: string;
  otherStyles?: string;
  handleChangeText: (text: string) => void;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
  props?: any;
}

export function FormField({
  label,
  value,
  placeholder,
  otherStyles,
  handleChangeText,
  showPassword,
  setShowPassword,
  ...props
}: FormFieldProps) {
  return (
    <View className={` ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium mb-4">{label}</Text>
      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={label === "Password" && !showPassword}
          {...props}
        />

        {label === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword?.(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
