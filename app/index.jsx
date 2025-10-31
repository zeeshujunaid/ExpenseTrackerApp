import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

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
