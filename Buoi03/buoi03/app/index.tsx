import { Image, Text, View, StyleSheet, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

export default function Index() {
  const mydata = ["Hello", "World", "React Native", "React Native Elements"];
  return (
    // <View style={styles.container}>
    //   <Image
    //     style={{ width: 100, height: 100}}
    //     source={{ uri: "https://picsum.photos/seed/696/3000/2000"}}
    //   />
    //   <Text style={styles.text}>Welcome to React Native App.</Text>
    //   <View style={styles.boxStyle}></View>
    // </View>
    <View style={styles.newsContainer}>
      {/* <View style={{ height: 40 }} /> */}
      <View style={styles.newsRow}>
        <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png'}} style={{ height: 100, width: 100}} />
        <View style={{ marginLeft: 10 }}>
          <View style={styles.newsHeader}>IPHONE 15</View>
          <View style={{ backgroundColor: 'cyan'}}>Iphone 15 mới ra mắt vào ngày 11/11/2021. Iphone 15 mới ra mắt vào ngày 11/11/2021. Iphone 15 mới ra mắt vào ngày 11/11/2021.</View>
        </View>        
      </View>      
    </View>
  );
}
const styles = StyleSheet.create({
  newsContainer:{flex: 1},
  newsRow:{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 5},
  newsHeader:{fontSize: 20, flexWrap: 'wrap'},
  boxStyle:{
    width: 250,
    height: 250,
    position: "absolute",
    top: 10, right: 10,
    backgroundColor: 'rgb(74,124,226)',
    borderWidth: 10,
    borderBottomColor: 'blue',
    borderLeftColor: 'red',
    borderTopColor: 'green',
    borderRightColor: 'yellow',
    borderRadius: 20,
    opacity: 0.5,
  },
  container: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 20,
    padding: 10,
  },
  text:{
    fontSize: 20,
  }
});