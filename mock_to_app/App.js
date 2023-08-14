import { View, Text, TextInput, Pressable} from "react-native";
import { styles } from "./styles"

export default function App() {
  return (
    <View
      style={styles.homeScreen}
    >

      <Text style={styles.title}>MyApp</Text>

      <View style={styles.middleBox}>

        <TextInput placeholder="Phone Number, Username or Email" style={styles.inputBox}></TextInput>
        <TextInput placeholder="Password" style={styles.inputBox}></TextInput>
        <Text style={styles.loginButton}>Log In</Text>
        <Text>Forgot Password?</Text>

      </View>

    </View>
  );
}
