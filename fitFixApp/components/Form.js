import * as React from "react";
import { StyleSheet, Button, View, Text, FlatList, CheckBox, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";
import ListItem from "./ListItem";

const Muscle = ({ name }) => (
  <View>
    <Text>{name}</Text>
  </View>
);

export default function Form({ navigation, muscles /*equipment*/ }) {
  const muscleList = () => {
    return Array.map(muscle => {
      return (
        <View key={muscle.id} style={{ margin: 10 }}>
          <Text>{muscle.name}</Text>
        </View>
      );
    });
    return <View>{list()}</View>;
  };
  console.log(muscleList);

  const [isSelected, setSelection] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = data => console.log(data);

  const renderItem = ({ muscle }) => (
    // <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />;
    <ListItem name={muscle.name} />
  );

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>THIS IS THE FORM1 COMPONENT</Text>
      <StatusBar style="auto" />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text>THIS IS inside the form tags</Text>
        <FlatList data={muscles} keyExtractor={muscle => muscle.name} renderItem={renderItem} />
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
