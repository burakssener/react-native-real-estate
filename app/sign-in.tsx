import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';

const SignIn = () => {
  const handleLogin = async () => {
    try {
      const result = await login();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-4">
        <View className="flex-1 justify-center items-center">
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to ReState with Google
          </Text>
          <TouchableOpacity onPress={handleLogin} className="bg-accent-100 shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
            <View className="flex flex-row items-center justify-center">
              <Image source={icons.google} className="w-5 h-5" resizeMode="contain" />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;