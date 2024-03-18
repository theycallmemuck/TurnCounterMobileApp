import { useCallback, useState } from "react";
import { Player } from "../../../entities/player";
import { addPlayer } from "../addPlayer";
import { deletePlayer as deletePlayerCallback } from "../deletePlayer";

function usePlayers(): [
  Player[],
  {
    deletePlayer: (name: string) => void;
    addNewPlayer: (name: string, color: string) => void;
  },
] {
  const [players, setPlayers] = useState<Array<Player>>([]);

  const addNewPlayer = useCallback(
    (name: string, color: string) => addPlayer({ name, color, setPlayers }),
    [],
  );

  const deletePlayer = useCallback(
    (name: string) => deletePlayerCallback({ name, setPlayers }),
    [],
  );
  return [
    players,
    {
      addNewPlayer,
      deletePlayer,
    },
  ];
}

export default usePlayers;
