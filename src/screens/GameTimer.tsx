import { SafeAreaView } from "react-native";
import TurnChanger from "../widgets/TurnChanger";

const GameTimer = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
      }}
    >
      <TurnChanger />
    </SafeAreaView>
  );
};

export default GameTimer;
