import { SafeAreaView } from "react-native";
import PlayerList from "../widgets/PlayerList";

const ChoosePlayers = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
      }}
    >
      <PlayerList />
    </SafeAreaView>
  );
};

export default ChoosePlayers;
