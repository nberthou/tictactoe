import { FC, useContext } from 'react';
import { Cell } from './Cell';
import { PlayersContext } from '../contexts/TicTacToeContext';
import { BoardContext } from '../contexts/BoardContext';

export const Board: FC = () => {
  const { player1Username, player2Username } = useContext(PlayersContext);

  const { winner, draw, currentPlayer, setBoard, setCurrentPlayer, setWinner, setDraw, board } =
    useContext(BoardContext);

  const players = { X: player1Username, O: player2Username };

  const getTitle = () => {
    if (winner) {
      return `${players[winner]} a gagné !`;
    }
    if (draw) {
      return `Match nul !`;
    }
    return `C'est au tour de : ${players[currentPlayer]}`;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
    setDraw(false);
  };

  return (
    <div>
      <h1>{getTitle()}</h1>
      {winner || draw ? (
        <button onClick={() => resetGame()}>Rejouer</button>
      ) : (
        <div id="container">
          {board.map((_, index) => (
            <Cell key={index} num={index} />
          ))}
        </div>
      )}
    </div>
  );
};
