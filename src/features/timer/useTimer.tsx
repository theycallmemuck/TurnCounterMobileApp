import { useState, useEffect, useCallback } from "react";
import { Player } from "../../entities/player";

type GameTimerReturnType = [
  {
    players: Array<Player>;
    isPaused: boolean;
    gameTime: number;
    currentTurnPlayerIndex: number;
  },
  {
    pauseGame: () => void;
    continueGame: () => void;
    goNext: () => void;
  },
];

function useGameTimer(initialPlayers: Array<Player>): GameTimerReturnType {
  const [gameTime, setGameTime] = useState(0);
  const [currentTurnPlayerIndex, setCurrentTurnPlayerIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);
  const [players, setPlayers] = useState<Array<Player>>(() => initialPlayers);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setGameTime((prevTime) => prevTime + 1);
        setPlayers((prevPlayers) => {
          return prevPlayers.map((player, index) => {
            if (index === currentTurnPlayerIndex) {
              return {
                ...player,
                time: player.time + 1, // увеличиваем текущее время хода
                totalTime: player.totalTime + 1, // увеличиваем общее время хода
              };
            }
            return player;
          });
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, currentTurnPlayerIndex]);

  const goNext = useCallback(() => {
    if (isPaused) {
      return;
    }
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => {
        if (index === currentTurnPlayerIndex) {
          return {
            ...player,
            time: 0, // обнуляем время текущего хода
            turns: player.turns + 1, // увеличиваем количество ходов
          };
        }
        return player;
      }),
    );
    setCurrentTurnPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
  }, [isPaused, currentTurnPlayerIndex]);

  const pauseGame = () => {
    setIsPaused(true);
  };

  const continueGame = () => {
    setIsPaused(false);
  };

  return [
    { players, isPaused, gameTime, currentTurnPlayerIndex },
    { goNext, pauseGame, continueGame },
  ];
}

export default useGameTimer;
