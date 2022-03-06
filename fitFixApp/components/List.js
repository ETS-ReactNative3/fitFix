import React, { useState } from "react";
import { StyleSheet, Button, View, Text, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import ListItem from "./ListItem";
import { uuid } from "uuidv4";

export default function List({ navigation }) {
  const [items, setItems] = useState([
    { id: uuid(), text: "Exercise1" },
    { id: uuid(), text: "Exercise2" },
    { id: uuid(), text: "Exercise3" }
  ]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>THIS IS THE List COMPONENT</Text>
      <StatusBar style="auto" />
      <Button title="See Exercise Details" onPress={() => navigation.navigate("Details")} />
      <FlatList data={items} renderItem={({ item }) => <Text>{item.text}</Text>} />
    </View>
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

// const exerciseData = [
//   {
//     id: 345,
//     uuid: "c788d643-150a-4ac7-97ef-84643c6419bf",
//     name: "2 Handed Kettlebell Swing",
//     exercise_base: 9,
//     status: "2",
//     description: "<p>Two Handed Russian Style Kettlebell swing</p>",
//     creation_date: "2015-08-03",
//     category: 10,
//     muscles: [],
//     muscles_secondary: [],
//     equipment: [10],
//     language: 2,
//     license: 2,
//     license_author: "deusinvictus",
//     variations: []
//   },
//   {
//     id: 174,
//     uuid: "99881bdd-43d7-4c3b-82ed-9c187d0455b7",
//     name: "Abduktoren-Maschine",
//     exercise_base: 12,
//     status: "2",
//     description:
//       "<ul>\n<li>in eine aufrechte Position setzen, bei der die Beine hüftbreit geöffnet sind</li>\n<li>den Rücken, die Knie und die Oberschenkelaußenseite an die jeweiligen Polster pressen</li>\n<li>mit den Händen an den Griffen festhalten</li>\n<li>die Oberschenkel bis zum Anschlagpunkt der Hebelarme auseinander drücken</li>\n<li>danach die Beine wieder zusammen führen</li>\n<li>das Gesäß nicht vom Sitz abheben</li>\n<li>beim Auseinanderdrücken der Hebelarme aus- und beim Zusammenführen einatmen</li>\n</ul>",
//     creation_date: "2013-07-19",
//     category: 9,
//     muscles: [8, 6],
//     muscles_secondary: [11],
//     equipment: [],
//     language: 1,
//     license: 1,
//     license_author: "flori",
//     variations: []
//   },
//   {
//     id: 223,
//     uuid: "e56d0a17-b1b8-427d-991e-97c530c7db6a",
//     name: "Adduktoren Maschine",
//     exercise_base: 13,
//     status: "2",
//     description: "<p>Oberschenkel Innenseite!</p>",
//     creation_date: "2014-02-26",
//     category: 9,
//     muscles: [],
//     muscles_secondary: [],
//     equipment: [],
//     language: 1,
//     license: 1,
//     license_author: "Marius",
//     variations: []
//   }
// ];
