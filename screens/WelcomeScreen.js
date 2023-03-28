import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button, Image } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
// import Video from "react-native-video";
import { Video, AVPlaybackStatus } from "expo-av";
const WelcomeScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`h-1/3 mt-10`}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
          source={{
            uri: "https://cdn.dribbble.com/users/3524358/screenshots/6456962/ezgif.com-video-to-gif-4.gif",
          }}
        ></Image>
      </View>
      <View style={tw`h-1/3 -mt-20`}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
          source={{
            uri: "https://media.istockphoto.com/id/1198036124/vector/vector-cartoon-illustration-of-happy-smiling-man-or-driver-driving-a-car-and-enjoying-the.jpg?s=612x612&w=0&k=20&c=0zASmG1S1TRDKQDDaIT37o1CaKlmqhveAezLOzZRWk0=",
          }}
        ></Image>
      </View>
      <View style={tw`h-1/3`}>
        <Pressable style={tw`bg-black rounded-3xl py-2 px-4 m-4`}>
          <Text
            style={tw`text-center text-white font-bold text-xl`}
            onPress={() => navigation.navigate("Sign In")}
          >
            Sign In
          </Text>
        </Pressable>
        <Pressable style={tw`bg-black rounded-3xl py-2 px-4 m-4`}>
          <Text
            style={tw`text-center text-white font-bold text-xl`}
            onPress={() => navigation.navigate("Sign Up")}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop: 20,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10,
  },
});

export default WelcomeScreen;
