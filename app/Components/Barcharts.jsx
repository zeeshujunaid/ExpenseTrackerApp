import { View, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function BarChartExample() {
  const screenWidth = Dimensions.get("window").width - 40;

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#FF4D4D", marginBottom: 10 }}>
        Income vs Expense
      </Text>

      <BarChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [800, 900, 700, 1100, 950, 1200], // Income
              colors: [(opacity = 1) => `rgba(64, 207, 71, ${opacity})`],
            },
            {
              data: [400, 650, 500, 700, 600, 850], // Expense
              colors: [(opacity = 1) => `rgba(255, 77, 77, ${opacity})`],
            },
          ],
        }}
        width={screenWidth}
        height={250}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 77, 77, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={{
          borderRadius: 16,
        }}
        fromZero
        showBarTops={false}
      />
    </View>
  );
}
