import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function ExpenseTrendsChart() {
  return (
    <View style={{ alignItems: "center" }}>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [120, 200, 450, 300, 500, 650],
              strokeWidth: 3,
            },
          ],
        }}
        width={Dimensions.get("window").width - 10}
        height={250}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#ffe6e6",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 77, 77, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ff3333",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          // paddingRight: 20,
        }}
      />
    </View>
  );
}
