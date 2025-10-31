import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function ChartExample() {
  const screenWidth = Dimensions.get("window").width - 40;

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        paddingVertical: 20,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 22,
          fontWeight: "700",
          color: "#FF4D4D",
          marginBottom: 10,
        }}
      >
        Monthly Expense Overview
      </Text>

      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [320, 480, 400, 670, 520, 740], // Dummy expenses in $
              strokeWidth: 3,
            },
          ],
          legend: ["Total Expenses ($)"],
        }}
        width={screenWidth}
        height={250}
        yAxisLabel="$"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 77, 77, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#FF4D4D",
          },
          propsForBackgroundLines: {
            stroke: "#eaeaea",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          alignSelf: "center",
        }}
      />

      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 14,
          color: "#555",
        }}
      >
        You spent the most in{" "}
        <Text style={{ fontWeight: "700", color: "#FF4D4D" }}>June</Text> 💸
      </Text>
    </View>
  );
}
