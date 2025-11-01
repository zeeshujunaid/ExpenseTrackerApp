import React from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function MinimalExpenseChart() {
  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [180, 250, 210, 300, 260, 290],
        strokeWidth: 4,
      },
    ],
  };

  return (
    <View style={{ alignItems: "center" }}>
      <LineChart
        data={data}
        width={Dimensions.get("window").width + 50}
        height={255}
        withDots={false}
        withInnerLines={false}
        withOuterLines={false}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: () => "#8b5e34",
          labelColor: () => "#000",
          decimalPlaces: 0,
          propsForBackgroundLines: {
            strokeWidth: 0,
          },
        }}
        bezier
        style={{
          borderRadius: 20,
          backgroundColor: "#fff",
          paddingLeft:60,
        }}
      />
    </View>
  );
}
