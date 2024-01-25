import { useState } from 'react';
import { PlayersPage } from './PlayersPage';
import { Board } from './Board';

export const TicTacToe = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  return <div>{!isPlaying ? <PlayersPage setIsPlaying={setIsPlaying} /> : <Board />}</div>;
};
