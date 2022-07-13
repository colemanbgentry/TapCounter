//Import list
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

//Going to the intended screen, use Expo Go, with a QR instruction to see the app
export default function App() {
  //Expressions
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(prevCount => prevCount + 1);
  const onDecrease = () => setCount(prevCount => prevCount - 1);
  const reset      = () => setCount(prevCount => prevCount * 0);
  return (
    //The SafeAreaView allows the app not to 
    // extend into the status bar on all phones.
    <SafeAreaView style={[styles.container]}>
      <View style={[{flex: 7}, styles.counterBox]}>
        <Text style={[styles.counter]}>
          {count}
        </Text>
      </View>
      <View style={[{flex: 1}, styles.buttonShelf]}>
        <TouchableOpacity 
          onPress={onDecrease}
          style={[{flex: 1}, styles.buttonValue]}
          >
          <Text style={[styles.buttons]}>
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={onIncrease}
          style={[{flex: 1}, styles.buttonValue]}
          >
          <Text style={[styles.buttons]}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[{flex: 1}, styles.buttonReset, styles.buttonShelf]}>
        <TouchableOpacity
          onPress={reset}
          style={[styles.buttonValue]}
        >
          <Text style={[styles.buttons]}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      {/*
          I had to figure out the inline React commenting which was different
          StatusBar is supposed to be auto, I was having problems with it and 
          set it to light instead. 
      */}
      <StatusBar style="light" /> 
    </SafeAreaView>
  );
}
//StyleSheet for the app
const styles = StyleSheet.create({
  //Holds the main portion of the app
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column'
  },
  //Holds the button level
  buttonShelf: {
    flexDirection: "row",
    alignItems: 'center',
    alignContent: 'center',
  },
  //Gives the buttons their flavor
  buttonValue: {
    margin: 2,
    padding: 20,
    backgroundColor: "blue",
    alignSelf: "center",
  },
  //Wanting the reset button to fill the bottom part of the screen
  //Just setteled for what I got instead
  buttonReset: {
    alignItems: "stretch",
    justifyContent: "center",
  },
  //Giving the button their size and font
  buttons: {
    fontSize: 25,
    color: "#fff",
    textAlign: 'center',
  },
  //Making the number box for alignment
  counterBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Making the number big enough to see
  counter: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#fff"
  },
});
