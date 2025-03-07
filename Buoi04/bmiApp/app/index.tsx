import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ProductList } from "./product";

export default function Index() {
  const [height, setHeight] = useState("160");
  const [weight, setWeight] = useState("50");
  const [bmi, setBmi] = useState("0");
  const [comment, setComment] = useState("");

  const calculateBmi = () => {
    const h = parseInt(height) / 100;
    const w = parseInt(weight);
    const bmi = w / (h * h);
    setBmi(bmi.toFixed(2));
    if(bmi < 18.5) {
      setComment("Underweight");
    } else if(bmi < 23) {
      setComment("Normal weight");
    } else if (bmi < 25) {
      setComment("Over weight");
    } else{
      setComment("Obese");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.title}>Chiều cao (cm)</Text>
        <TextInput style={styles.input} inputMode="numeric" value={height} onChangeText={(e) => setHeight(e)} />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Cân nặng (kg)</Text>
        <TextInput style={styles.input}  inputMode="numeric" value={weight} onChangeText={(v) => setWeight(v)} />
      </View>
      <View style={styles.group}>
        <Text style={[styles.title, styles.alignCenter]}>BMI: {bmi}</Text>
        <Text style={[styles.title, styles.alignCenter]}> {comment}</Text>
      </View>
      <View style={styles.group}>
        <TouchableOpacity style={styles.button} onPress={calculateBmi}>
          <Text>CALCULATE</Text>
        </TouchableOpacity>
      </View>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  group: { marginTop: 10  },
  alignCenter: {textAlign: 'center'},
  title: { fontSize: 20, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, height: 40 },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderWidth: 1
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    flexDirection: "column",
    padding: 20
  }
});
