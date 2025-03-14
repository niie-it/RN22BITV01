import { Text, View, StyleSheet, ScrollView} from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <View style = {[styles.header]}>
        <View style = {[styles.timerWrapper]}>
          <Text style = {styles.timer}>00:00:00</Text>
        </View>
        <View style = {[styles.buttonWrapper]}>
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
    backgroundColor : '#9E9E9E',
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