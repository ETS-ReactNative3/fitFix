import * as React from "react";
import { StyleSheet, Button, View, SafeAreaView, TouchableOpacity } from "react-native";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
const baseUrl = "https://wger.de/api/v2";
import CheckBox from "expo-checkbox";

export default function Form({ navigation }) {
  const [muscleData, setMuscleData] = useState([]);
  const [equipmentData, setEquipmentData] = useState([]);
  const [muscleLoading, setMuscleLoading] = useState(true);
  const [equipmentLoading, setEquipmentLoading] = useState(true);
  const [agree, setAgree] = useState(false);
  const [muscleSelections, setmuscleSelections] = useState([]);

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
    return (
      <View style={styles.listItemView}>
        <CheckBox value={agree} onValueChange={() => setAgree(!agree)} color={agree ? "#4630EB" : undefined} />
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    );
  };
  useEffect(() => {
    fetchMuscleData();
  }, []);

  const renderEquipmentItem = ({ item }) => {
    return (
      <>
        <Text style={styles.listItemText}>{item.name}</Text>
        <Text>{console.log("renderEquipmentItem reached")}</Text>
      </>
    );
  };
  useEffect(() => {
    fetchEquipmentData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <NativeBaseProvider>
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("List")}>
          <Text style={styles.buttonText}>See full list of exercises</Text>
        </TouchableOpacity>
        <View>
          <Center flex={1}>
            <Text style={styles.header}> Select Focus Muscle Groups</Text>
            {muscleLoading && <Box>Loading..</Box>}
            {muscleData && (
              <FlatList data={muscleData} renderItem={renderMuscleItem} keyExtractor={muscleItem => muscleItem.id.toString()} />
            )}
          </Center>
        </View>
        <View>
          <Center flex={1}>
            <Text style={styles.header}> Select Available Equipment</Text>
            {equipmentLoading && <Box>Loading..</Box>}
            {equipmentData && (
              <FlatList
                data={equipmentData}
                renderItem={renderEquipmentItem}
                keyExtractor={equipmentItem => equipmentItem.id.toString()}
              />
            )}
          </Center>
        </View>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "black",
    fontWeight: "600",
    textAlign: "center"
  },
  header: {
    color: "#ff6f69",
    fontWeight: "800",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20
  },
  listItemText: {
    color: "white",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
    marginLeft: 20
  },
  listItemView: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
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
  }
});

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

// import * as React from "react";
// import { StyleSheet, Button, View, CheckBox, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { v4 as uuidv4 } from "uuid";

// const premadeMuscleData = [
//   {
//     id: 2,
//     name: "Anterior deltoid"
//   },
//   {
//     id: 1,
//     name: "Biceps brachii"
//   },
//   {
//     id: 11,
//     name: "Biceps femoris"
//   },
//   {
//     id: 13,
//     name: "Brachialis"
//   },
//   {
//     id: 7,
//     name: "Gastrocnemius"
//   },
//   {
//     id: 8,
//     name: "Gluteus maximus"
//   },
//   {
//     id: 12,
//     name: "Latissimus dorsi"
//   },
//   {
//     id: 14,
//     name: "Obliquus externus abdominis"
//   },
//   {
//     id: 4,
//     name: "Pectoralis major"
//   },
//   {
//     id: 10,
//     name: "Quadriceps femoris"
//   },
//   {
//     id: 6,
//     name: "Rectus abdominis"
//   },
//   {
//     id: 3,
//     name: "Serratus anterior"
//   },
//   {
//     id: 15,
//     name: "Soleus"
//   },
//   {
//     id: 9,
//     name: "Trapezius"
//   },
//   {
//     id: 5,
//     name: "Triceps brachii"
//   }
// ];

// const premadeEquipmentData = [
//   {
//     id: 1,
//     name: "Barbell"
//   },
//   {
//     id: 8,
//     name: "Bench"
//   },
//   {
//     id: 3,
//     name: "Dumbbell"
//   },
//   {
//     id: 4,
//     name: "Gym mat"
//   },
//   {
//     id: 9,
//     name: "Incline bench"
//   },
//   {
//     id: 10,
//     name: "Kettlebell"
//   },
//   {
//     id: 7,
//     name: "none (bodyweight exercise)"
//   },
//   {
//     id: 6,
//     name: "Pull-up bar"
//   },
//   {
//     id: 5,
//     name: "Swiss Ball"
//   },
//   {
//     id: 2,
//     name: "SZ-Bar"
//   }
// ];

// const Muscle = ({ item }) => (
//   <View>
//     <Text>{item.name}</Text>
//   </View>
// );
// const Equipment = ({ item }) => (
//   <View>
//     <Text>{item.name}</Text>
//   </View>
// );

// export default function Form({ navigation }) {
//   const renderMuscleItem = ({ item }) => {
//     // console.log("renderMuscleItem reached")
//     <Muscle name={item.name} />;
//   };
//   const renderEquipmentItem = ({ item }) => {
//     <Equipment name={item.name} />;
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <View style={{ flex: 0.5 }}>
//         <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("List")}>
//           <Text style={styles.buttonText}>See full list of exercises</Text>
//         </TouchableOpacity>
//         <StatusBar style="auto" />
//       </View>

//       <View style={{ flex: 2, backgroundColor: "#C6E2FF" }}>
//         <Text> Fetch Muscle API</Text>

//         <FlatList data={premadeMuscleData} keyExtractor={item => item.id.toString()} renderItem={renderMuscleItem} />
//       </View>
//       <View style={{ flex: 2, backgroundColor: "blue" }}>
//         <Text> Fetch Equipment API</Text>
//         <FlatList data={premadeEquipmentData} keyExtractor={item => item.id.toString()} renderItem={renderEquipmentItem} />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   buttonText: {
//     color: "black",
//     fontWeight: "600",
//     textAlign: "center"
//     // textTransform: "uppercase"
//   },
//   homeButton: {
//     color: "#ffffff",
//     elevation: 8,
//     backgroundColor: "#ffffff",
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     marginBottom: 20,
//     marginTop: 20
//   }
// });
// // console.log("not destructured:");
// // console.log(props.route.params.muscle);
// // console.log("equipment");
// // console.log(equipment);
// // console.log("new equipment in form");
// // console.log(newEquipmentData);
// // console.log(muscleData.name);
// // console.log("muscle in form 2");
// // console.log(...muscleData);
// // console.log(muscleData.name);
// // console.log("muscleLoading");
// // console.log(muscleLoading);
// // console.log("equipmentLoading");
// // console.log(equipmentLoading);

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center"
// //   }
// // });

// // EQUIPMENT API CALL
// //--------------------------------------------------------------
// // const makeEquipmentRequest = async () => {
// //   try {
// //     const response = await axios.get(`${baseUrl}/equipment/` /*, config*/);
// //     if (response.status === 200) {
// //       // response - object, eg { status: 200, message: 'OK' }
// //       console.log("equipment success stuff");
// //       console.log(response.data.results);
// //       return response.data.results;
// //     }
// //     return false;
// //   } catch (err) {
// //     console.error(err);
// //     return false;
// //   }
// // };
