import { Player } from "../../entities/player";

export { default } from "./RootStackNavigation";

export type RootStackRouteParams = {
  ChoosePlayers: undefined;
  GameTimer: {
    initialPlayers: Array<Player>;
  };
  GameResults: {
    players: Array<Player>;
    gameTime: number;
  };
};
