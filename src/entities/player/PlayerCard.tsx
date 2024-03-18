import { FC, memo } from "react";
import { Player } from ".";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type PlayerCardParams = {
  player: Player;
  onRemovePlayer: (name: string) => void;
};

const PlayerCard: FC<PlayerCardParams> = ({ player, onRemovePlayer }) => {
  const { color, name } = player;
  return (
    <View style={styles.container}>
      <View style={[styles.colorIndicator, { backgroundColor: color }]} />
      <Text children={name} style={styles.name} />
      <Pressable onPress={() => onRemovePlayer(name)}>
        <AntDesign name="close" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    borderWidth: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  colorIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default memo(PlayerCard);
