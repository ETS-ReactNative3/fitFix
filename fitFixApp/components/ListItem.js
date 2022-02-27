import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function ListItem({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LIST ITEM</Text>
      <Text>Exercise Name</Text>
      <Text>Exercise Description: fjas;ldjfls dslkfjdjk dsjfdksjf fds sdj lkjkljsdf jkljfs.</Text>
      <Text>Equipment</Text>
      <Text>Muscle</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});