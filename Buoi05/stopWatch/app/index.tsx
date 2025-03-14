import { useState, useRef } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import formatTime from "minutes-seconds-milliseconds";

export default function Index() {
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isRunning, setIsRunning] =  useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const handleStartPress = () => {
    if(isRunning) {
      clearInterval(intervalRef.current!);
      setIsRunning(false);
    } else{
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTimeRef.current!);
      }, 100);
      setIsRunning(true);
    }
  }

  const startStopButton = () => {
    let mybtnStyle = isRunning ? styles.StopButton : styles.startButton;
    let mybtnText = isRunning ? 'Stop' : 'Start';
    return (
      <TouchableOpacity style = {[styles.button, mybtnStyle]} onPress={handleStartPress}>
        <Text>{mybtnText}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style = {styles.container}>
      <View style = {[styles.header]}>
        <View style = {[styles.timerWrapper]}>
          <Text style = {styles.timer}>{formatTime(timeElapsed)}</Text>
        </View>
        <View style = {[styles.buttonWrapper]}>
          { startStopButton() }
          <TouchableOpacity style = {[styles.button, styles.lap]}>
            <Text>LAP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {[styles.footer]} >
        <ScrollView style={{flex:1, backgroundColor:'#E0E0E0'}}>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#EEEE9E',
    alignItems : 'stretch'
  },
  header :{
    flex : 1
  },
  timerWrapper: {
    flex : 5,
    justifyContent : 'center',
    alignItems : 'center'
  },
  buttonWrapper: {
    flex : 3,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  timer : {
    fontSize : 60
  },
  footer : {
    flex : 1
  },
  button : {
    borderWidth :2,
    height : 100,
    width : 100,
    borderRadius :50,
    justifyContent : 'center',
    alignItems : 'center'
  },
  startButton : {
    borderColor : '#00CC00'
  },
  StopButton : {
    borderColor : '#CC0000'
  },
  lap : {
    justifyContent : 'space-around',
    flexDirection : 'row'
  },
  lapText : {
    fontSize : 30
  }
});