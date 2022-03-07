import * as React from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";

export default function ListItem({ navigation, DATA, deleteItem }) {
  return (
    <View>
      <Text>{DATA.name}</Text>
      <FontAwesome name="remove" size={24} color="red" onPress={() => deleteItem(item.id)} />
      <StatusBar style="auto" />
    </View>
  );
}
