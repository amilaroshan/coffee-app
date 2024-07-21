import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        style={styles.topImageArea}
        resizeMode="cover"
      >
        <Image source={require("./assets/logo.png")} />
        <Text style={styles.subHeading}>
          Brewed for Perfection,Delivered to your Doorstep
        </Text>
      </ImageBackground>

      <View style={styles.formWrapper}>
        <Text style={styles.formHeading}>Please sign in to your account</Text>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Email/Mobile Number</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topImageArea: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingBottom: 10,
  },
  formWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    padding:20
  },
  subHeading: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
    marginTop: 15,
    lineHeight: 28,
  },
  formHeading: {
    fontSize: 22,
    marginBottom:20
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  inputWrapper:{
    marginBottom:20
  },
  inputText:{
    fontSize:16,
    marginBottom:5
  }
});
