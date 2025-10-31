import { View, StyleSheet, ScrollView } from "react-native";
import MinimalExpenseChart from "../Components/Minimalcharts";

export default function Homescreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <MinimalExpenseChart />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "90%",
    paddingVertical: 30,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});
