import { RouteProp, useRoute } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { RootStackRouteParams } from "../../screens/routes";

const PlayersResults = () => {
  const { params } = useRoute<RouteProp<RootStackRouteParams, "GameResults">>;
  const {} = params;
  return (
    <View>
      <FlatList data={[]} renderItem={() => <View />} />
    </View>
  );
};

export default PlayersResults;
