// import * as React from "react";
// import { StyleSheet, Button, View, CheckBox, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { v4 as uuidv4 } from "uuid";

// export default function Form({ navigation, equipmentData, muscleData }) {
//   // const { muscleData } = muscleData;

//   const renderMuscleItem = ({ item }) => {
//     console.log("renderMuscleItem reached");
//     return <Text>{item.name}</Text>;
//   };

//   const renderEquipmentItem = ({ item }) => {
//     console.log("renderEquipmentItem reached");
//     return <Text>{item.name}</Text>;
//   };
//   console.log("muscle in form");
//   console.log(muscleData);
//   console.log("equipment in form");
//   console.log(equipmentData);
//   const testVariable = equipmentData;
//   console.log("testVariable in form");
//   console.log(testVariable);

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
//         {/* {muscleLoading && <Text>Loading..</Text>} */}
//         {/* {muscle && <FlatList data={muscle} renderItem={renderMuscleItem} keyExtractor={muscle => muscle.id.toString()} />} */}
//         {/* <FlatList data={muscleData} renderItem={renderMuscleItem()} keyExtractor={muscle => muscle.id.toString()} /> */}
//         <FlatList
//           data={premadeMuscleData}
//           keyExtractor={() => item.id.toString()}
//           renderItem={({ item }) => <Text>{item.name}</Text>}
//         />
//       </View>
//       <View style={{ flex: 2, backgroundColor: "blue" }}>
//         <Text> Fetch Equipment API</Text>
//         {/* {equipmentLoading && <Text>Loading..</Text>} */}
//         {/* {equipment && (
//           <FlatList data={equipment} renderItem={renderEquipmentItem} keyExtractor={equipment => equipment.id.toString()} />
//         )} */}
//         {/* <FlatList data={equipmentData} renderItem={renderEquipmentItem()} keyExtractor={equipment => equipment.id.toString()} /> */}
//         {/* <FlatList
//           data={equipmentData}
//           keyExtractor={equipment => equipment.id.toString()}
//           renderItem={({ item }) => <Text>{item.name}</Text>}
//         /> */}
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

// const premadeMuscleData = [
//   {
//     id: 2,
//     name: "Anterior deltoid",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-2.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-2.svg"
//   },
//   {
//     id: 1,
//     name: "Biceps brachii",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-1.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-1.svg"
//   },
//   {
//     id: 11,
//     name: "Biceps femoris",
//     is_front: false,
//     image_url_main: "/static/images/muscles/main/muscle-11.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-11.svg"
//   },
//   {
//     id: 13,
//     name: "Brachialis",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-13.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-13.svg"
//   },
//   {
//     id: 7,
//     name: "Gastrocnemius",
//     is_front: false,
//     image_url_main: "/static/images/muscles/main/muscle-7.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-7.svg"
//   },
//   {
//     id: 8,
//     name: "Gluteus maximus",
//     is_front: false,
//     image_url_main: "/static/images/muscles/main/muscle-8.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-8.svg"
//   },
//   {
//     id: 12,
//     name: "Latissimus dorsi",
//     is_front: false,
//     image_url_main: "/static/images/muscles/main/muscle-12.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-12.svg"
//   },
//   {
//     id: 14,
//     name: "Obliquus externus abdominis",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-14.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-14.svg"
//   },
//   {
//     id: 4,
//     name: "Pectoralis major",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-4.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-4.svg"
//   },
//   {
//     id: 10,
//     name: "Quadriceps femoris",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-10.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-10.svg"
//   },
//   {
//     id: 6,
//     name: "Rectus abdominis",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-6.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-6.svg"
//   },
//   {
//     id: 3,
//     name: "Serratus anterior",
//     is_front: true,
//     image_url_main: "/static/images/muscles/main/muscle-3.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-3.svg"
//   },
//   {
//     id: 15,
//     name: "Soleus",
//     is_front: false,
//     image_url_main: "/static/images/muscles/main/muscle-15.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-15.svg"
//   },
//   {
//     id: 9,
//     name: "Trapezius",
//     is_front: false,
//     image_url_main: "/static/images/muscles/main/muscle-9.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-9.svg"
//   },
//   {
//     id: 5,
//     name: "Triceps brachii",
//     is_front: false,
//     image_url_main: "/static/images/muscles/main/muscle-5.svg",
//     image_url_secondary: "/static/images/muscles/secondary/muscle-5.svg"
//   }
// ];
