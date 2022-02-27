import * as React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>fitfix</Text>
      <Text>Quick Workout Generator</Text>
      <Image style={styles.image} source={require('../assets/exercise_equipment.jpg')} />
      <StatusBar style="auto" />
      <Button
        title="Let's Get Started"
        onPress={() => navigation.navigate('Form1')}
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
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
});