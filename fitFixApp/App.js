import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Home from "./components/Home";
import Form from "./components/Form";
import List from "./components/List";
import Details from "./components/Details";
import { View } from "react-native";
// import { NativeBaseProvider, Text, Box } from "native-base";
import { v4 as uuidv4 } from "uuid";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const baseUrl = "https://wger.de/api/v2";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  const [muscleData, setMuscleData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const [muscleLoading, setMuscleLoading] = useState(true);
  const [equipmentLoading, setEquipmentLoading] = useState(true);

  const fetchMuscleData = async () => {
    const resp = await fetch(`${baseUrl}/muscle/`);
    const data = await resp.json();
    setMuscleData(data.results);
    setMuscleLoading(false);
  };
  const fetchEquipmentData = async () => {
    const resp = await fetch(`${baseUrl}/equipment/`);
    const data = await resp.json();
    setEquipmentData(data.results);
    setEquipmentLoading(false);
  };

  useEffect(() => {
    fetchEquipmentData();
  }, []);
  useEffect(() => {
    fetchMuscleData();
  }, []);
  // console.log(muscleLoading == true);
  // console.log(equipmentLoading);

  if (muscleLoading && equipmentLoading) {
    return (
      <>
        <SafeAreaView>
          <Text>Loading...</Text>
        </SafeAreaView>
      </>
    );
  } else {
    // console.log("muscleData in App.js");
    // console.log(...muscleData);
    return (
      // <NativeBaseProvider>
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
            <Stack.Screen
              name="Form"
              component={Form}
              options={{ title: "Form" }}
              initialParams={{
                equipment: { equipmentData },
                muscle: { muscleData },
                muscleLoading: { muscleLoading },
                equipmentLoading: { equipmentLoading }
              }}
              // setMuscleLoading={setMuscleLoading}
              // setEquipmentLoading={setEquipmentLoading}
            />
            <Stack.Screen name="List" component={List} options={{ title: "Exercise List" }} />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{ title: "Exercise Details" }} /*exercises={exercises}*/
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
      // </NativeBaseProvider>
    );
  }
}

export default App;
