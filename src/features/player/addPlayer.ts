import React from "react";
import { Player } from "../../entities/player";

type AddPlayerParams = {
  name: string;
  color: string;
  setPlayers: React.Dispatch<React.SetStateAction<Array<Player>>>;
};

export const addPlayer = ({
  name,
  color,
  setPlayers,
}: AddPlayerParams): void => {
  const player: Player = {
    name,
    color,
    time: 0,
    turns: 0,
    totalTime: 0,
  };
  setPlayers((prevState) => {
    return [...prevState, player];
  });
};

export const onSavePlayer = (
  players: Array<Player>,
  addNewPlayer: (name: string, color: string) => void,
  { name, color }: { name: string; color: string },
): void | never => {
  if (
    players.some((player) => player.name === name || player.color === color)
  ) {
    throw new Error("not possible");
  }

  addNewPlayer(name, color);
};
