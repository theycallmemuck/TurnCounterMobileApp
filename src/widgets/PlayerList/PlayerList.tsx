import { FC, useCallback, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import ColorPicker, { Panel5, Preview } from "reanimated-color-picker";
import PlayerCard from "../../entities/player/PlayerCard";
import usePlayers from "../../features/player/hooks/usePlayers";
import { onSavePlayer } from "../../features/player/addPlayer";
import { useNavigation } from "@react-navigation/native";
import { RootStackRouteParams } from "../../screens/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const newPlayerInitialValues = {
  name: "",
  color: "#000",
};

const PlayersList: FC = () => {
  const [players, { deletePlayer, addNewPlayer }] = usePlayers();
  const [playerModalVisible, setPlayerModalVisible] = useState(false);
  const [newPlayerInfo, setNewPlayerInfo] = useState(newPlayerInitialValues);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackRouteParams, "ChoosePlayers">
    >();

  const newPlayerHandler = (key: keyof typeof newPlayerInfo) => (e: string) => {
    // string is color
    return setNewPlayerInfo((prevState) => ({
      ...prevState,
      [key]: e,
    }));
  };

  const onNameInput = newPlayerHandler("name");
  const onColorInput = newPlayerHandler("color");

  const onNewPlayer = useCallback(() => {
    try {
      onSavePlayer(players, addNewPlayer, newPlayerInfo);
    } catch (e) {
      console.error(e);
    } finally {
      setPlayerModalVisible(false);
      setNewPlayerInfo(newPlayerInitialValues);
    }
  }, [players, newPlayerInfo]);

  const startGame = () => {
    navigation.navigate("GameTimer", { initialPlayers: players });
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={players}
          renderItem={({ item }) => {
            return <PlayerCard player={item} onRemovePlayer={deletePlayer} />;
          }}
          scrollEnabled={false}
          keyExtractor={(item) => {
            return item.name;
          }}
        />
        <Button
          title="Добавить игрока"
          onPress={() => setPlayerModalVisible(true)}
        />
        <Modal visible={playerModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.nameInput}
              value={newPlayerInfo.name}
              onChangeText={onNameInput}
            />
            <View style={styles.colorWrapper}>
              <ColorPicker onComplete={({ hex }) => onColorInput(hex)}>
                <Preview />
                <Panel5 />
              </ColorPicker>
            </View>
          </View>
          <Button title="Сохранить" onPress={onNewPlayer} />
        </Modal>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={startGame} title="Начать играть" />
      </View>
    </View>
  );
};

export default PlayersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonWrapper: {
    paddingBottom: 16,
  },
  modalContainer: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  colorWrapper: {
    borderWidth: 4,
    borderStyle: "dashed",
    borderRadius: 8,
  },
  nameInput: {
    padding: 12,
    width: "100%",
    fontSize: 24,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 4,
    borderRadius: 8,
    marginBottom: 16,
  },
});
