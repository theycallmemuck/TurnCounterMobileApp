import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { RootStackRouteParams } from "../../screens/routes";

const PlayersResults = () => {
  const { params } = useRoute<RouteProp<RootStackRouteParams, "GameResults">>();
  const { gameTime, players } = params;

  return (
    <View>
      <Text style={styles.timeText}>{}</Text>
      <FlatList data={[]} renderItem={() => <View />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  timeText: {},
});

export default PlayersResults;
