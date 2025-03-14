import { useState, useRef } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import formatTime from "minutes-seconds-milliseconds";

export default function Index() {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [isRunning, setIsRunning] =  useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);
  
  const intervalRef = useRef<Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const handleStartPress = () => {
    if(isRunning) {
      clearInterval(intervalRef.current!);
      setIsRunning(false);
    } else{
      setIsRunning(true);
      setLaps([]);
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current!);
      }, 10);
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

  const handlePressLap = () => {
    setLaps((laps) => [...laps, elapsedTime]);
  };

  const displayLaps = () => {
    return laps.map((time, index) => {
      return (
        <View key={index} style={styles.lap}>
          <Text style={styles.lapText}>Lap #{index + 1}</Text>
          <Text style={styles.lapText}>{formatTime(time)}</Text>
        </View>
      );
    });
  };

  return (
    <View style = {styles.container}>
      <View style = {[styles.header]}>
        <View style = {[styles.timerWrapper]}>
          <Text style = {styles.timer}>{formatTime(elapsedTime)}</Text>
        </View>
        <View style = {[styles.buttonWrapper]}>
          { startStopButton() }
          <TouchableOpacity style = {[styles.button, styles.lap]}  onPress={handlePressLap}>
            <Text>LAP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {[styles.footer]} >
        <ScrollView style={{flex:1, backgroundColor:'#E0E0E0'}}>
          {displayLaps()}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#A0A08E',
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