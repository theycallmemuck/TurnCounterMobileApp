import { RouteProp, useRoute } from "@react-navigation/native";
import { useMemo } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import useGameTimer from "../../features/timer/useTimer";
import { RootStackRouteParams } from "../../screens/routes";

const TurnChanger = () => {
  const { params } = useRoute<RouteProp<RootStackRouteParams, "GameTimer">>();
  const { initialPlayers } = params;
  const [
    { players, isPaused, gameTime, currentTurnPlayerIndex },
    { goNext, pauseGame, continueGame },
  ] = useGameTimer(initialPlayers);

  const currentPlayer = useMemo(() => {
    return players[currentTurnPlayerIndex];
  }, [players, currentTurnPlayerIndex]);

  return (
    <Pressable
      onPress={goNext}
      style={[styles.container, { backgroundColor: currentPlayer.color }]}
    >
      <View>
        <Text children={`Время игры: ${gameTime}`} style={styles.playerText} />
        <Text
          children={`Имя игрока: ${currentPlayer.name}`}
          style={styles.playerText}
        />
        <Text
          children={`Время хода: ${currentPlayer.time}`}
          style={styles.playerText}
        />
        <Text
          children={`Количество ходов: ${currentPlayer.turns}`}
          style={styles.playerText}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  playerText: {
    fontSize: 20,
  },
  timeText: {},
});

export default TurnChanger;
