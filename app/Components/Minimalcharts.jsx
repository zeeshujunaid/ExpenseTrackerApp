import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function MinimalExpenseChart() {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [180, 250, 210, 300, 260, 290],
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={{ alignItems: "center" }}>
      {/* Dropdown + Search */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
        >
          <Text style={{ fontSize: 14, color: "#333" }}>This Month ▼</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>🔍</Text>
      </View>

      {/* Expense Text */}
      <Text
        style={{
          fontSize: 34,
          fontWeight: "700",
          color: "#000",
          marginBottom: 20,
        }}
      >
        $301.95
      </Text>

      {/* Line Chart */}
      <LineChart
        data={data}
        width={Dimensions.get("window").width - 80}
        height={220}
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
          labelColor: () => "#999",
        }}
        bezier
        style={{
          borderRadius: 12,
        }}
      />
    </View>
  );
}
