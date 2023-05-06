import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskswrapper}>
        <Text style={styles.sectionTitle}>Tytuł taska</Text>
        <View style={styles.items}>
          <Task text="Task1" />
          <Task text="Task2" />
          <Task text="Mleko3" />
          <Task />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskswrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    flexWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
