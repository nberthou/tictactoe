import { FC, useContext } from 'react';
import { BoardContext } from '../contexts/BoardContext';

type CellProps = {
  num: number;
};

export const Cell: FC<CellProps> = ({ num }) => {
  const { setCurrentPlayer, setWinner, currentPlayer, setDraw, board, setBoard } = useContext(BoardContext);

  const WINNING_COMBOS = {
    horizontal: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    vertical: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    diagonal: [
      [0, 4, 8],
      [2, 4, 6],
    ],
  };

  const changeTurn = () => {
    setCurrentPlayer((prevCurrentPlayer: 'X' | 'O') => (prevCurrentPlayer === 'X' ? 'O' : 'X'));
  };

  const checkWinner = (board: string[]) => {
    for (const combo in WINNING_COMBOS) {
      const newCombo = combo as keyof typeof WINNING_COMBOS;
      WINNING_COMBOS[newCombo].forEach((pattern) => {
        if (board[pattern[0]] === '' || board[pattern[1]] === '' || board[pattern[2]] === '') {
          return;
        } else if (board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]) {
          setWinner(currentPlayer);
        }
      });
    }
  };

  const checkDraw = (board: string[]) => {
    if (board.every((cell) => cell !== '')) {
      setDraw(true);
    }
  };

  const makeMove = () => {
    if (board[num] !== '') return;
    const newBoard = [...board];
    newBoard[num] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard);
    checkDraw(newBoard);
    changeTurn();
  };

  return (
    <div
      role="button"
      tabIndex={num}
      id={`cell${num + 1}`}
      className={`cell ${board[num] ? `cell-${board[num]}` : ''}`}
      onClick={() => makeMove()}
      onKeyUp={(e) => {
        if (e.key === 'Enter') makeMove();
      }}
    >
      {board[num]}
    </div>
  );
};
