import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome screen!</Text>

      <View>
        <Pressable style={tw`bg-black rounded-3xl py-2 px-4 m-4`}>
          <Text
            style={tw`text-center text-white font-bold text-lg`}
            onPress={() => navigation.navigate("Sign In")}
          >
            Sign In
          </Text>
        </Pressable>
        <Pressable style={tw`bg-black rounded-3xl py-2 px-4 m-4`}>
          <Text
            style={tw`text-center text-white font-bold text-lg`}
            onPress={() => navigation.navigate("Sign Up")}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>

      {/* <View style={styles.buttons}>
        <Button
          title="Sign in"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Sign In")}
        />
        <Button
          title="Sign up"
          type="outline"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("Sign Up")}
        />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10,
  },
});

export default WelcomeScreen;
