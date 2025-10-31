import { Text, TouchableOpacity, View,Image, TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:"#fff",
      }}
    >
        <View style={{height:"30%",justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../../assets/images/logo.webp")} style={{height:"50%",width:"50%",}}/>
        </View> 

        <View style={{justifyContent:"center",alignItems:"center",height:"70%",}}>
            <View style={{height:"20%",justifyContent:"center",alignItems:"center",width:"100%"}}>
                <Text  style={{fontSize:20,fontWeight:"bold"}}>Welcome Back</Text>
                <Text  style={{fontSize:10,}}>Plz Login To Your Account</Text>
            </View>


            <View style={{height:"40%",justifyContent:"center",alignItems:"center",backgroundColor:"#17c9e0ff",width:"100%"}}>
                <Text>helo</Text>
            </View>

            <View style={{height:"40%",justifyContent:"center",alignItems:"center",backgroundColor:"#17c9e0ff",width:"100%"}}>
                <Text>helo</Text>
            </View>
        </View>


        
    </View>
  );
}
