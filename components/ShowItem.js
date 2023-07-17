import { Text } from "react-native";
import React from "react";
import { Avatar, HStack, Pressable } from "native-base";

export default function ShowItem({ show, navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate("Shows Details", { show: show })}
    >
      <HStack w="100%" alignItems="center" space="3">
        <Avatar
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2061/2061107.png",
          }}
        ></Avatar>
        <Text>{show.name}</Text>
      </HStack>
    </Pressable>
  );
}
