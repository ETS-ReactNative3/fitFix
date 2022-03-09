import * as React from "react";
import { StyleSheet, Button, View, CheckBox, SafeAreaView, FlatList, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
const baseUrl = "https://wger.de/api/v2";
import { v4 as uuidv4 } from "uuid";

export default function Form({ navigation, props }) {
  const {
    navigation,
    equipment,
    muscle,
    muscleLoading,
    equipmentLoading,
    setMuscleLoading,
    setEquipmentLoading
  } = props.route.params;
  // const [muscle, setMuscleData] = useState([]);
  // const [equipment, setEquipmentData] = useState([]);
  // const [muscleLoading, setMuscleLoading] = useState(true);
  // const [equipmentLoading, setEquipmentLoading] = useState(true);
  const renderMuscleItem = muscle => {
    return <Text>{muscle.name}</Text>;
  };

  const renderEquipmentItem = equipment => {
    return <Text>{equipment.name}</Text>;
  };

  console.log(props.route.params.muscle);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flex: 0.5, backgroundColor: "#C6E2FF" }}>
        <Text>THIS IS THE FORM1 COMPONENT</Text>
        <StatusBar style="auto" />
        <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      </View>
      <View style={{ flex: 2, backgroundColor: "#C6E2FF" }}>
        <Text> Fetch Muscle API</Text>
        {props.muscleLoading && <Text>Loading..</Text>}
        {props.muscle && (
          <FlatList data={props.muscle} renderItem={renderMuscleItem} keyExtractor={muscle => props.muscle.id.toString()} />
        )}
      </View>
      <View style={{ flex: 2, backgroundColor: "blue" }}>
        <Text> Fetch Equipment API</Text>
        {props.equipmentLoading && <Text>Loading..</Text>}
        {props.equipment && (
          <FlatList
            data={props.equipment}
            renderItem={renderEquipmentItem}
            keyExtractor={equipment => props.equipment.id.toString()}
          />
        )}
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
