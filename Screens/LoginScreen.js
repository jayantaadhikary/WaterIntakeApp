import { View, Text, Pressable } from "react-native";
const LoginScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <View>
        <Pressable onPress={onPressHandler}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
