import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Signup() {

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>this is signup page</Text>

      <TouchableOpacity
        onPress={() => {
          router.push("/(auth)/Login");
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}
