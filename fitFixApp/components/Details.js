import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Details({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>THIS IS THE Details COMPONENT</Text>
      <StatusBar style="auto" />




      <Button
        title="Back to List"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Start Over"
        onPress={() => navigation.popToTop()}
      />
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