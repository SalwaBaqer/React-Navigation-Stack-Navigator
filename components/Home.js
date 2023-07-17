import { StyleSheet, ImageBackground } from "react-native";
import { Button } from "native-base";

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: "https://w0.peakpx.com/wallpaper/54/436/HD-wallpaper-friends-tv-show-amigos-warner-logo-black-pure-fondo.jpg",
      }}
      style={styles.background}
    >
      <Button onPress={() => navigation.navigate("Shows List")}>
        Press here
      </Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
