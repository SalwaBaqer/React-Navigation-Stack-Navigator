import { View, Text, StyleSheet, Image } from "react-native";

export default function ShowDetails({ route }) {
  const { show } = route.params;
  return (
    <View style={styles.showDetailWrapper}>
      <Image
        style={styles.showDetailImage}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/4236/4236887.png",
        }}
      />
      <Text style={styles.showDetailTitle}>{show.name}</Text>
      <Text style={styles.showDetailDescription}>Run Time: {show.runtime}</Text>
      <Text style={styles.showDetailDescription}>Air Date: {show.airdate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  showDetailWrapper: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: "center",
  },
  showDetailImage: {
    width: 150,
    height: 150,
  },
  showDetailTitle: {
    fontWeight: "bold",
    fontSize: 40,
    margin: 10,
  },
  showDetailDescription: {
    fontSize: 20,
    color: "grey",
    margin: 5,
  },
});
