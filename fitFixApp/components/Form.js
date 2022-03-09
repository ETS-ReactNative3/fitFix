import * as React from "react";
import { StyleSheet, Button, View, CheckBox, SafeAreaView, FlatList, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
const baseUrl = "https://wger.de/api/v2";
import { v4 as uuidv4 } from "uuid";

export default function Form({ navigation }) {
  const [muscleData, setMuscleData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const [muscleLoading, setMuscleLoading] = useState(true);
  const [equipmentLoading, setEquipmentLoading] = useState(true);

  const fetchMuscleData = async () => {
    const resp = await fetch(`${baseUrl}/muscle/`);
    const data = await resp.json();
    console.log("---------");
    console.log(data);
    console.log(data.results);
    console.log("---------");
    setMuscleData(data.results);
    setMuscleLoading(false);
  };
  const fetchEquipmentData = async () => {
    const resp = await fetch(`${baseUrl}/equipment/`);
    const data = await resp.json();
    console.log("---------");
    console.log(data);
    console.log(data.results);
    console.log("---------");
    setEquipmentData(data.results);
    setEquipmentLoading(false);
  };

  const renderMuscleItem = ({ item }) => {
    return <Text>{item.name}</Text>;
  };
  useEffect(() => {
    fetchMuscleData();
  }, []);

  const renderEquipmentItem = ({ item }) => {
    return <Text>{item.name}</Text>;
  };
  useEffect(() => {
    fetchEquipmentData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>THIS IS THE FORM1 COMPONENT</Text>
      <StatusBar style="auto" />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />

      <View flex={1}>
        <View>
          <Text> Fetch Muscle API</Text>
          {muscleLoading && <Text>Loading..</Text>}
          {muscleData && <FlatList data={muscleData} renderItem={renderMuscleItem} keyExtractor={item => item.id.toString()} />}
        </View>
        <View>
          <Text> Fetch Equipment API</Text>
          {equipmentLoading && <Text>Loading..</Text>}
          {equipmentData && (
            <FlatList data={equipmentData} renderItem={renderEquipmentItem} keyExtractor={item => item.id.toString()} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// EQUIPMENT API CALL
//--------------------------------------------------------------
// const makeEquipmentRequest = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/equipment/` /*, config*/);
//     if (response.status === 200) {
//       // response - object, eg { status: 200, message: 'OK' }
//       console.log("equipment success stuff");
//       console.log(response.data.results);
//       return response.data.results;
//     }
//     return false;
//   } catch (err) {
//     console.error(err);
//     return false;
//   }
// };
