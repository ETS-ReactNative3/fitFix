import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ListItem from "./ListItem";
import { uuid } from "uuidv4";

export default function List({ navigation }) {
  const [items, setItems] = useState([
    {
      id: 345,
      uuid: "c788d643-150a-4ac7-97ef-84643c6419bf",
      name: "2 Handed Kettlebell Swing",
    },
    {
      id: 174,
      uuid: "99881bdd-43d7-4c3b-82ed-9c187d0455b7",
      name: "Abduktoren-Maschine",
    },
    {
      id: 223,
      uuid: "e56d0a17-b1b8-427d-991e-97c530c7db6a",
      name: "Adduktoren Maschine",
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      alert("delete: " + id);
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>THIS IS THE List COMPONENT</Text>
      <StatusBar style="auto" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem item={item} deleteItem={deleteItem} />
            {/* <Button title="See Exercise Details" onPress={() => navigation.navigate("Details")} /> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
