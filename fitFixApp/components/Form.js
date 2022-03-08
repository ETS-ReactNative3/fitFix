import * as React from "react";
import { StyleSheet, Button, View, CheckBox, SafeAreaView } from "react-native";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
const baseUrl = "https://wger.de/api/v2";

export default function Form({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMuscleData = async () => {
    const resp = await fetch(`${baseUrl}/muscle/`);
    const data = await resp.json();
    console.log("---------");
    console.log(data);
    console.log(data.results);
    console.log("---------");
    setData(data.results);
    setLoading(false);
  };
  const fetchEquipmentData = async () => {
    const resp = await fetch(`${baseUrl}/equipment/`);
    const data = await resp.json();
    console.log("---------");
    console.log(data);
    console.log(data.results);
    console.log("---------");
    setData(data.results);
    setLoading(false);
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
      <NativeBaseProvider>
        <Text>THIS IS THE FORM1 COMPONENT</Text>
        <StatusBar style="auto" />
        {/* <Button title="Go to List" onPress={() => navigation.navigate("List")} /> */}
        <View>
          <Center flex={1}>
            <Box> Fetch Muscle API</Box>
            {loading && <Box>Loading..</Box>}
            {data && <FlatList data={data} renderItem={renderMuscleItem} keyExtractor={item => item.id.toString()} />}
          </Center>
        </View>{" "}
        <View>
          <Center flex={1}>
            <Box> Fetch Equipment API</Box>
            {loading && <Box>Loading..</Box>}
            {data && <FlatList data={data} renderItem={renderEquipmentItem} keyExtractor={item => item.id.toString()} />}
          </Center>
        </View>{" "}
      </NativeBaseProvider>
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
