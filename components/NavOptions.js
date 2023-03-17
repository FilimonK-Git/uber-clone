import React from "react";
import { TouchableOpacity, Image, FlatList, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

let data = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "X",
  },
  {
    id: 2,
    title: "Order fufu",
    image: "https://links.papareact.com/28w",
    screen: "Y",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
