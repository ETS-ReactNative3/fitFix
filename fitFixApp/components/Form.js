import * as React from "react";
import { StyleSheet, Button, View, CheckBox, SafeAreaView, FlatList, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
// const baseUrl = "https://wger.de/api/v2";
// import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
  const {
    // navigation,
    equipmentData,
    muscleData
    // muscleLoading,
    // equipmentLoading
    // setEquipmentData,
    // setMuscleData
  } = props.route.params;
  // const [newEquipmentData, setNewEquipmentData] = useState([equipmentData]);

  // setEquipmentData([equipmentData]);
  // setMuscleData([muscleData]);

  const renderMuscleItem = ({ item }) => {
    console.log("renderMuscleItem reached");
    return <Text>{item.name}</Text>;
  };

  // const renderEquipmentItem = ({ item }) => {
  //   console.log("renderEquipmentItem reached");
  //   return <Text>{item.name}</Text>;
  // };
  console.log("muscle in form");
  console.log(muscleData);
  console.log("equipment in form");
  console.log(equipmentData);
  // console.log("not destructured:");
  // console.log(props.route.params.muscle);
  // console.log("equipment");
  // console.log(equipment);
  // console.log("new equipment in form");
  // console.log(newEquipmentData);
  // console.log(muscleData.name);
  // console.log("muscle in form 2");
  // console.log(...muscleData);
  // console.log(muscleData.name);
  // console.log("muscleLoading");
  // console.log(muscleLoading);
  // console.log("equipmentLoading");
  // console.log(equipmentLoading);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flex: 0.5, backgroundColor: "#C6E2FF" }}>
        <Text>THIS IS THE FORM1 COMPONENT</Text>
        <StatusBar style="auto" />
        <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      </View>
      <View style={{ flex: 2, backgroundColor: "#C6E2FF" }}>
        <Text> Fetch Muscle API</Text>
        {/* {muscleLoading && <Text>Loading..</Text>} */}
        {/* {muscle && <FlatList data={muscle} renderItem={renderMuscleItem} keyExtractor={muscle => muscle.id.toString()} />} */}
        {/* <FlatList data={muscleData} renderItem={renderMuscleItem()} keyExtractor={muscle => muscle.id.toString()} /> */}
      </View>
      <View style={{ flex: 2, backgroundColor: "blue" }}>
        <Text> Fetch Equipment API</Text>
        {/* {equipmentLoading && <Text>Loading..</Text>} */}
        {/* {equipment && (
          <FlatList data={equipment} renderItem={renderEquipmentItem} keyExtractor={equipment => equipment.id.toString()} />
        )} */}
        {/* <FlatList data={equipmentData} renderItem={renderEquipmentItem()} keyExtractor={equipment => equipment.id.toString()} /> */}
        <FlatList
          data={equipmentData}
          keyExtractor={equipment => equipment.id.toString()}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
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
