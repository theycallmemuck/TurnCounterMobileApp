import React from "react";
import { Player } from "../../entities/player";

type DeletePlayerParams = {
  name: string;
  setPlayers: React.Dispatch<React.SetStateAction<Array<Player>>>;
};

export const deletePlayer = ({
  name,
  setPlayers,
}: DeletePlayerParams): void => {
  setPlayers((prevState) => {
    return prevState.filter((player) => player.name !== name);
  });
};
