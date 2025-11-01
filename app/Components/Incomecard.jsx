import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// ✅ Dummy Data
const expenses = [
  { id: "1", category: "Business", date: "29/5/2005", amount: "20,000", icon: "briefcase" },
  { id: "2", category: "Food", date: "02/11/2024", amount: "1,200", icon: "cutlery" },
  { id: "3", category: "Travel", date: "15/10/2024", amount: "5,500", icon: "plane" },
];

// ✅ Expense Card Component
function IncomeCard({ item }) {
  return (
    <View style={styles.card}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <FontAwesome name={item.icon} size={22} color="#a52b2b" />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>CATEGORY</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.label}>DATE</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.amountContainer}>
        <Text style={styles.rsLabel}>RS</Text>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );
}

// ✅ Main Component
export default function IncomeList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <IncomeCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#daf1deff",
    padding: 10,
  },
  card: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    backgroundColor: "#fceaea",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "column",
  },
  label: {
    fontSize: 11,
    color: "#777",
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  date: {
    fontSize: 13,
    color: "#333",
  },
  amountContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  rsLabel: {
    fontSize: 11,
    color: "#777",
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a52b2b",
  },
});
