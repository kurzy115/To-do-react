import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
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
          <Task text="Mleko5" />
        </View>
      </View>
      <KeyboardAvoidingView style={styles.writeTaskwrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskwrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
});
