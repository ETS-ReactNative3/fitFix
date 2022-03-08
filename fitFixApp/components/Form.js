import * as React from "react";
import { StyleSheet, Button, View, CheckBox, SafeAreaView } from "react-native";
import { Box, FlatList, Center, NativeBaseProvider, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
// import { useForm } from "react-hook-form";
// import ListItem from "./ListItem";
import { useState, useEffect } from "react";
// import axios from "axios";
const baseUrl = "https://wger.de/api/v2";

// const makeMuscleRequest = async () => {
//   try {
//     const response = await axios.get(`${baseUrl}/muscle/` /*, config*/);
//     if (response.status === 200) {
//       // response - object, eg { status: 200, message: 'OK' }
//       console.log("muscle success stuff");
//       console.log(response.data.results);
//       return response.data.results;
//     }
//     return false;
//   } catch (err) {
//     console.error(err);
//     return false;
//   }
// };

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item"
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item"
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item"
//   }
// ];

// const Item = ({ title }) => (
//   <View>
//     <Text>{title}</Text>
//   </View>
// );
// const Item = ({ name }) => (
//   <View>
//     <Text>{name}</Text>
//   </View>
// );

export default function Form({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch(`${baseUrl}/muscle/`);
    const data = await resp.results.json();
    setData(data);
    setLoading(false);
  };

  // // render item used in the flatlist
  // const renderItem = ({ item }) => (
  //   // <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />;
  //   <Item title={item.title} />
  // );
  // const renderItem = ({ item }) => {
  //   console.log("renderItem function");
  //   // <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />;
  //   <Item name={item.name} />;
  // };
  const renderItem = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <NativeBaseProvider>
      <Text>THIS IS THE FORM1 COMPONENT</Text>
      <StatusBar style="auto" />
      {/* <Button title="Go to List" onPress={() => navigation.navigate("List")} /> */}
      <View /*onSubmit={handleSubmit(onSubmit)}*/>
        <Center flex={1}>
          <Box> Fetch API</Box>
          {loading && <Box>Loading..</Box>}
          {console.log("data in fetch api box" + { data })}
          {data && <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />}
        </Center>
      </View>
      <View /*onSubmit={handleSubmit(onSubmit)}*/>
        {/* <Text>THIS IS inside the form tags</Text> */}
        {/* {console.log("This is the in form request:")} */}
        {/* {console.log(makeMuscleRequest())} */}
        {/* <FlatList data={DATA} keyExtractor={item => item.id} renderItem={renderItem} /> */}
        {/* {console.log()} */}
        {/* <FlatList data={makeMuscleRequest()} keyExtractor={item => item.id} renderItem={renderItem} /> */}
        {/* {console.log("flatList has run")} */}
        {/* <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>} */}
        {/* <input type="submit" /> */}
      </View>
    </NativeBaseProvider>
    // </SafeAreaView>
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
