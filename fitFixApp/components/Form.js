import * as React from "react";
import { StyleSheet, Button, View, Text, FlatList, CheckBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useForm } from "react-hook-form";

const renderItem = muscle => (
  <>
    <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />;<Text>{muscle.name}</Text>;
  </>
);

export default function Form({ navigation, muscles /*equipment*/ }) {
  const [isSelected, setSelection] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>THIS IS THE FORM1 COMPONENT</Text>
      <StatusBar style="auto" />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlatList data={muscles} keyExtractor={muscle => muscle.id} renderItem={renderItem} />
        {/* <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>} */}

        <input type="submit" />
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
