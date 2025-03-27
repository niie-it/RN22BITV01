import { Text, TextInput, StyleSheet, Button, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [subject, setSubject] = useState('React Native');
  useEffect(() => {
    console.log('any change....', count, subject);
  }); //gọi khi bất kỳ state nào thay đổi
  useEffect(() => {
    console.log('first render....');
  }, []); //gọi khi component render (lần đầu tiên)
  useEffect(() => {
    console.log('change count value')
  }, [count]); //gọi khi count thay đổi
  return (
    <View style={{ flex: 1 }}>
      <Text>DEMO useEffect</Text>
      <Text style={{ fontSize: 50 }}>Count: {count}</Text>
      <Text style={{ fontSize: 50 }}>subject: {subject}</Text>
      <TextInput value={subject} onChangeText={(e) => setSubject(e)} />
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 5, borderWidth: 1
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
