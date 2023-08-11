import { View, Text, Pressable, StyleSheet } from "react-native";

const HomeScreen = () => {
  const adderHandler = () => {
    alert("Adder pressed!!");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Dashboard</Text>
      </View>
      <View style={styles.adderButton}>
        <Pressable onPress={adderHandler}>
          <Text style={styles.plus}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  adderButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#24B6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 30,
    color: "#F4F8FB",
    textAlign: "center",
    marginTop: -5,
  },
});
