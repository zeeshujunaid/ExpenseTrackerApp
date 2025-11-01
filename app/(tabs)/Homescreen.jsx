import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import MinimalExpenseChart from "../Components/Minimalcharts";
import Barcharts from "../Components/Barcharts";
import { LinearGradient } from "expo-linear-gradient";

export default function Homescreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🔹 Navbar */}
      <LinearGradient colors={["#a52b2b", "#7a1c1c"]} style={styles.navbar}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/logo.webp")}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <Text style={styles.username}>Welcome ZEESHAN</Text>

        <TouchableOpacity>
          <Image
            source={require("../../assets/images/profile.webp")}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </LinearGradient>

      {/* 🔹 Chart Section */}
      <View style={styles.topContainer}>
        <MinimalExpenseChart />
      </View>

      {/* 🔹 Summary Cards */}
      <View style={styles.cardRow}>
        <View style={[styles.card, { backgroundColor: "#ffb703" }]}>
          <Text style={styles.cardTitle}>Income</Text>
          <Text style={styles.cardValue}>$12,450</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#e63946" }]}>
          <Text style={styles.cardTitle}>Expense</Text>
          <Text style={styles.cardValue}>$7,800</Text>
        </View>
        <View style={[styles.card, { backgroundColor: "#2a9d8f" }]}>
          <Text style={styles.cardTitle}>Balance</Text>
          <Text style={styles.cardValue}>$4,650</Text>
        </View>
      </View>

      {/* 🔹 Bottom Analytics Section */}
      {/* <View style={styles.bottomContainer}>
        <Text style={styles.subHeading}>Monthly Analytics</Text>
        <Barcharts />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },

  // Navbar
  navbar: {
    width: "100%",
    backgroundColor: "#a52b2b",
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 4,
  },
  username: {
    color: "#fff",
    alignItems:"center",
    fontSize: 20,
    fontWeight: "bold",
  },
  avatar: {
    backgroundColor: "#fff",
    width: 48,
    height: 48,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#fff",
  },

  // Top Chart
  topContainer: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  // Summary Cards
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: -10,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    elevation: 4,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 13,
    opacity: 0.9,
  },
  cardValue: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  // Bottom Section
  bottomContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: "center",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
});
