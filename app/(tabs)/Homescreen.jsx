import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MinimalExpenseChart from "../Components/Minimalcharts";
import ExpenseCard from "../Components/Expensecard";
import Incomehistory from "../Components/Incomecard";

export default function Homescreen() {
  return (
    <View style={styles.container}>
      {/* 🔹 Navbar (Fixed at top) */}
      <LinearGradient colors={["#a52b2b", "#7a1c1c"]} style={styles.navbar}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/logo.webp")}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <Text style={styles.username}>Welcome ZEESHAN</Text>

        <TouchableOpacity onPress={() => router.push("/Profilescreen")}>
          <Image
            source={require("../../assets/images/profile.webp")}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </LinearGradient>

      {/* 🔹 Scrollable Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        stickyHeaderIndices={[2]} // Yeh important line hai 👈
      >
        {/* 1️⃣ Chart Section */}
        <View style={styles.topContainer}>
          <MinimalExpenseChart />
        </View>

        {/* 2️⃣ Gap / Spacing */}
        <View style={{ height: 10 }} />

        {/* 3️⃣ Cards (Sticky Header) */}
        <View style={styles.stickyCardContainer}>
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
        </View>

        {/* 4️⃣ Bottom Analytics */}
        <View style={styles.bottomContainer}>
          <View style={styles.expensehistory}>
            <Text style={styles.subHeading}>EXPENSE HISTORY</Text>
            <ExpenseCard />
          </View>

          <View style={styles.incomehistory}>
            <Text style={styles.subHeading}>INCOME HISTORY</Text>
            <Incomehistory />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Navbar Fixed
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
    elevation: 5,
    zIndex: 10,
  },
  username: {
    color: "#fff",
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

  // Chart
  topContainer: {
    width: "90%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  // Sticky Cards
  stickyCardContainer: {
    // backgroundColor: "#fff",
    zIndex: -5,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
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

  // Bottom Analytics
  bottomContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 10,
    padding: 20,
    elevation: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    paddingTop:10,
  },
  incomehistory: {
    width: "100%",
    backgroundColor: "#daf1deff",
    borderRadius: 20,
    marginTop: 10,
    // padding: 20,
    elevation: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  expensehistory: {
    width: "100%",
    backgroundColor: "#f0d0d0ff",
    borderRadius: 20,
    marginTop: 10,
    // padding: 20,
    elevation: 5,
    flexDirection: "column",
    alignItems: "center",
  },
});
