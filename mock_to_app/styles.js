import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    homeScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5B8BDF",
        width: "100%"
      },

    title: {color: "white", fontWeight: "bold", fontSize: 70},

    middleBox: {width: "100%", alignItems: "center", flexDirection: "column", justifyContent: "space-evenly", height: "25%"},

    inputBox: { backgroundColor: "white", width: "80%", fontSize: 15, padding: 5, paddingVertical: 10, paddingLeft: 15, borderWidth: 0.5, borderRadius: 20, overflow: "hidden"},

    loginButton: { backgroundColor: "#2C64C6", color: "white", textAlign: "center", fontWeight: "bold", width: "80%", fontSize: 15, padding: 5, paddingLeft: 15, marginTop: 10, borderWidth: 0.5, borderRadius: 20, overflow: "hidden"}

})