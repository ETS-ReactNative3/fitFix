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
  // const itemOnPress = () => {
  //   setModalOpen(true);
  // };
  const Item = ({ item, backgroundColor, textColor, deleteItem }) => (
    <TouchableOpacity
      onPress={() => {
        setModalOpen(true);
      }}
      style={[styles.item, backgroundColor]}
    >
      <View style={styles.listItem}>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
        <Icon name="remove" size={20} color="#000000" onPress={() => deleteItem(item.id)} />
        <Modal visible={modalOpen} animationType="fade">
          <View style={styles.modalContent}>
            <Icon name="remove" size={40} color="#000000" onPress={() => setModalOpen(false)} style={styles.modalToggle} />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
  // const renderExerciseDetails = ({ item }) => {
  //   return (
  //     <View>
  //       <Text>{item.name}</Text>
  //       <Text>{item.description}</Text>
  //     </View>
  //   );
  // };
  const fetchExerciseData = async () => {
    const resp = await fetch(`${baseUrl}/exercise/`);
    const data = await resp.json();
    setExerciseData(data.results);
    setExerciseLoading(false);
  };
  const renderExerciseItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fd90a3" : "#cffc5b";
    const color = item.id === selectedId ? "white" : "#000000";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        deleteItem={deleteItem}
      />
    );
  };
  useEffect(() => {
    fetchExerciseData();
  }, []);

  const deleteItem = id => {
    setExerciseData(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };
  const indItemData = id => {
    setModalData(exerciseData => {
      return exerciseData.filter(item => item.id === id);
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>THIS IS THE List COMPONENT</Text>
      <StatusBar style="auto" />
      <Icon name="ellipsis-h" size={20} color="#000000" onPress={() => setModalOpen(true)} style={styles.modalToggle} />
      {exerciseLoading && <Text>Loading..</Text>}
      {exerciseData && (
        <FlatList
          data={exerciseData}
          renderItem={renderExerciseItem}
          keyExtractor={item => item.id.toString()}
          extraData={selectedId}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginHorizontal: 16
  },
  title: {
    fontSize: 12
  },
  modalContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  modalToggle: {
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: "#f2f2f2",
    // backgroundColor: "#fe8f71",
    padding: 10,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "center"
  }
});
