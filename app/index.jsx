import { View, Text, Image, TouchableOpacity,StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        paddingTop:"40%",
        alignItems: "center",
        paddingHorizontal: 25,
      }}
    >
      <StatusBar hidden/>
      {/* Logo */}
      <Image
        source={require("../assets/images/bgremoveLogo.png")}
        style={{
          width: 260,
          height: 260,
          resizeMode: "contain",
        }}
      />

      {/* Title */}
      <Text
        style={{
          fontSize: 34,
          fontWeight: "800",
          color: "#222",
          textAlign: "center",
          marginBottom: 12,
          letterSpacing: 0.5,
        }}
      >
        Welcome to{" "}
        <Text style={{ color: "#97723d" }}>Expense</Text>
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          fontSize: 16,
          color: "#555",
          textAlign: "center",
          lineHeight: 24,
          width: "85%",
          marginBottom: 40,
        }}
      >
        Manage your income smartly and track every expense effortlessly.
      </Text>

      {/* Button */}
      <TouchableOpacity
      onPress={()=>router.push("/Login")}
        style={{
          backgroundColor: "#97723d",
          paddingVertical: 14,
          paddingHorizontal: 60,
          borderRadius: 30,
          shadowColor: "#FF4D4D",
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 8 },
          shadowRadius: 10,
          elevation: 5,
        }}
        activeOpacity={0.8}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
            letterSpacing: 0.3,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
