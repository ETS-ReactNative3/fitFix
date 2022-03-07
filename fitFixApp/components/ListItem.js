import * as React from "react";
import { StyleSheet, Button, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";

export default function ListItem({ navigation, item, deleteItem }) {
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text>{item.name}</Text>
        <FontAwesome name="remove" size={24} color="red" onPress={() => deleteItem(item.id)} />
        <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
