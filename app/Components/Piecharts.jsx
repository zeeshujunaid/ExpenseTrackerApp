import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function PieChartExample() {
  const screenWidth = Dimensions.get("window").width - 20;

  const data = [
    { name: "Food", amount: 300, color: "#FF4D4D", legendFontColor: "#333", legendFontSize: 14 },
    { name: "Travel", amount: 150, color: "#FFD93D", legendFontColor: "#333", legendFontSize: 14 },
    { name: "Bills", amount: 250, color: "#6BCB77", legendFontColor: "#333", legendFontSize: 14 },
    { name: "Rent", amount: 400, color: "#4D96FF", legendFontColor: "#333", legendFontSize: 14 },
    { name: "Others", amount: 100, color: "#9D4EDD", legendFontColor: "#333", legendFontSize: 14 },
  ];

  return (
    <View style={{ alignItems: "center", marginTop: 30 }}>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "#FF4D4D", marginBottom: 10 }}>
        Expense Breakdown
      </Text>

      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          color: () => "#000",
        }}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
      />
    </View>
  );
}
