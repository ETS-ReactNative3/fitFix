import React, { useState, useEffect } from "react";
import { StyleSheet, Button, View, Modal, TouchableOpacity, FlatList, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
const baseUrl = "https://wger.de/api/v2";
import { v4 as uuidv4 } from "uuid";
import Icon from "react-native-vector-icons/FontAwesome";

export default function List({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseLoading, setExerciseLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState([exerciseData]);

  const itemDescription = item => {
    console.log(item.id);
    if (item.description != "<p>.</p>") {
      return (
        <>
          <Text style={styles.modalBody}>
            {item.description
              .replace("<p>", "")
              .replace("</p>", "")
              .replace("<ul>", "")
              .replace("</ul>", "")
              .replace("<li>", "")
              .replace("</li>", "")}
          </Text>{" "}
          " "
        </>
      );
    } else {
      return <Text style={styles.modalBody}>Exercise has no description</Text>;
    }
  };

  const onPressItem = item => {
    setModalOpen(true);
    setSelectedId(item.id);
    console.log("------------");
    console.log(selectedId);
    console.log("------------");
  };

  const Item = ({ item, backgroundColor, textColor, deleteItem }) => (
    <TouchableOpacity
      onPress={() => {
        onPressItem(item);
      }}
      style={[styles.item, backgroundColor]}
    >
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Icon name="remove" size={20} color="#000000" onPress={() => deleteItem(item.id)} />
        <Modal visible={modalOpen} animationType="fade">
          <View style={styles.modalContent}>
            <Text style={styles.itemTextHeader}>{item.name}</Text>
            <Text style={styles.modalBody}>{itemDescription(item)}</Text>
            <Icon name="remove" size={40} color="#000000" onPress={() => setModalOpen(false)} style={styles.modalToggle} />
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );

  const fetchExerciseData = async () => {
    const resp = await fetch(`${baseUrl}/exercise/`);
    const data = await resp.json();
    setExerciseData(data.results);
    setExerciseLoading(false);
  };
  const renderExerciseItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#cffc5b" : "#ff6f69";
    const color = item.id === selectedId ? "white" : "#000000";
    if (item.language == 2) {
      return <Item item={item} backgroundColor={{ backgroundColor }} textColor={{ color }} deleteItem={deleteItem} />;
    }
  };
  useEffect(() => {
    fetchExerciseData();
  }, []);

  const deleteItem = id => {
    setExerciseData(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      {/* <Icon name="ellipsis-h" size={20} color="#000000" onPress={() => setModalOpen(true)} style={styles.modalToggle} /> */}
      {exerciseLoading && <Text>Loading..</Text>}
      {exerciseData && (
        <FlatList
          data={exerciseData}
          renderItem={renderExerciseItem}
          keyExtractor={item => item.id.toString()}
          extraData={selectedId}
        />
      )}
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Start Over</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemText: {
    color: "black",
    fontWeight: "800",
    textAlign: "center"
    // textTransformations: "uppercase"
  },
  itemTextHeader: {
    color: "black",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 15
    // textTransformations: "uppercase"
  },
  modalBody: {
    color: "black",
    fontWeight: "400",
    textAlign: "center"
    // textTransform: "uppercase"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 20
  },
  title: {
    fontSize: 12
  },
  modalContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20
  },
  modalToggle: {
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: "#f2f2f2",
    // backgroundColor: "#fe8f71",
    padding: 10,
    // borderColor: "#000000",
    // borderWidth: 1,
    // borderRadius: 20,
    alignSelf: "center"
  },
  homeButton: {
    color: "#ffffff",
    elevation: 8,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 20
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    textAlign: "center"
  }
});
