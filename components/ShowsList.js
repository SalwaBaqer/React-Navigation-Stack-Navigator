//react-native
import { StyleSheet, View } from "react-native";
//apis
import { useQuery } from "@tanstack/react-query";
import { getShows } from "../apis/shows";
//native-base
import { Box, Heading, VStack } from "native-base";
// components
import ShowItem from "./ShowItem";

export default function ShowsList({ navigation }) {
  const { data: shows } = useQuery({
    queryKey: ["shows"],
    queryFn: () => getShows(),
  });
  const showsList = shows?.map((show) => (
    <ShowItem show={show} key={show.id} navigation={navigation} />
  ));
  return (
    <Box style={styles.container}>
      <Heading fontSize="xl" p="4" pb="3" marginBottom={4}>
        Today's Shows
      </Heading>
      <VStack space="5">{showsList}</VStack>;
    </Box>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    width: 200,
  },
});
