import * as React from "react";
import { StyleSheet, Button, View, Text, FlatList, CheckBox, SafeAreaView, statusBar } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import ListItem from "./ListItem";
import axios from "axios";
const baseUrl = "https://wger.de/api/v2";

const makeMuscleRequest = async () => {
  try {
    const response = await axios.get(`${baseUrl}/muscle/` /*, config*/);
    if (response.status === 200) {
      // response - object, eg { status: 200, message: 'OK' }
      console.log("muscle success stuff");
      console.log(response.data.results[1].name);
      return response.data.results;
    }
    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const Item = ({ name }) => (
  <View>
    <Text>{name}</Text>
  </View>
);

export default function Form({ navigation /* muscles equipment*/ }) {
  // for the form and selection boxes
  const [isSelected, setSelection] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = data => console.log(data);

  // render item used in the flatlist
  const renderItem = ({ item }) => {
    console.log("renderItem function");
    // <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />;
    return <Item name={item.name} />;
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>THIS IS THE FORM1 COMPONENT</Text>
      <StatusBar style="auto" />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text>THIS IS inside the form tags</Text>
        {console.log("This is the in form request:")}
        <FlatList data={makeMuscleRequest()} keyExtractor={item => item.id} renderItem={renderItem} />
        {/* <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>} */}

        <input type="submit" />
      </form>
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
