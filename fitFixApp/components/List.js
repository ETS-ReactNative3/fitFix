import React, { useEffect, useState } from "react";
import { StyleSheet, Button, View, Text, FlatList, Modal, TouchableOpacity, ActivityIndicator } from "react-native";
// import { StatusBar } from "expo-status-bar";
import ListItem from "./ListItem";
import { uuid } from "uuidv4";

export default function List({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getExercises = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      // const response = await fetch("https://wger.de/api/v2/exerciseinfo/");
      const json = await response.json();
      SVGMetadataElement(json.exercises);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  // const [items, setItems] = useState([
  //   {
  //     id: 345,
  //     uuid: "c788d643-150a-4ac7-97ef-84643c6419bf",
  //     name: "2 Handed Kettlebell Swing"
  //   },
  //   {
  //     id: 174,
  //     uuid: "99881bdd-43d7-4c3b-82ed-9c187d0455b7",
  //     name: "Abduktoren-Maschine"
  //   },
  //   {
  //     id: 223,
  //     uuid: "e56d0a17-b1b8-427d-991e-97c530c7db6a",
  //     name: "Adduktoren Maschine"
  //   }
  // ]);

  const deleteItem = id => {
    setItems(prevItems => {
      alert("delete: " + id);
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <ListItem item={item} deleteItem={deleteItem}>
                {item.title}
              </ListItem>
            </TouchableOpacity>
          )}
        />
      )}
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

// import React, { useState } from "react";
// import { FlatList, SafeAreaView, StyleSheet, Button, View, Text, Modal, TouchableOpacity } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import ListItem from "./ListItem";
// import { uuid } from "uuidv4";

// const DATA = [
//   {
//     id: 345,
//     uuid: "c788d643-150a-4ac7-97ef-84643c6419bf",
//     name: "2 Handed Kettlebell Swing"
//   },
//   {
//     id: 174,
//     uuid: "99881bdd-43d7-4c3b-82ed-9c187d0455b7",
//     name: "Abduktoren-Maschine"
//   },
//   {
//     id: 223,
//     uuid: "e56d0a17-b1b8-427d-991e-97c530c7db6a",
//     name: "Adduktoren Maschine"
//   }
// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <ListItem style={[styles.title, textColor]} item={item} deleteItem={deleteItem}>
//       {item.name}
//     </ListItem>
//   </TouchableOpacity>
// );
// // -------------------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------------------
// // -------------------------------------------------------------------------------------------

// export default function List({ navigation }) {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     const color = item.id === selectedId ? "white" : "black";

//     return (
//       <Item item={item} onPress={() => setSelectedId(item.id)} backgroundColor={{ backgroundColor }} textColor={{ color }} />
//     );
//   };

//   const deleteItem = id => {
//     setItems(prevItems => {
//       alert("delete: " + id);
//       return prevItems.filter(item => item.id != id);
//     });
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>THIS IS THE List COMPONENT</Text>
//       <StatusBar style="auto" />
//       <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedId} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
