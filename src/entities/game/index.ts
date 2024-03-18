import { Player } from "../player";

export type Game = {
  players: Array<Player>;
  time: number; // whole game time
  currentPlayer: Player; // current player turn
};

export type GameConfig = {
  timeLimit: number; // time limit per turn
};
