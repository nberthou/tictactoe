import { useState, createContext, FC, ReactNode } from 'react';

type BoardProviderProps = {
  board: Array<string>;
  currentPlayer: 'X' | 'O';
  winner: 'X' | 'O' | null;
  draw: boolean;
  setBoard: (_value: string[]) => void;
  setCurrentPlayer: ((_value: 'X' | 'O') => void) & ((_callback: (_prevCurrentPlayer: 'X' | 'O') => 'X' | 'O') => void);
  setWinner: (_value: 'X' | 'O' | null) => void;
  setDraw: (_value: boolean) => void;
};

export const BoardContext = createContext<BoardProviderProps>({
  board: Array(9).fill(''),
  currentPlayer: 'X',
  winner: null,
  draw: false,
  setBoard: () => {},
  setCurrentPlayer: () => {},
  setWinner: () => {},
  setDraw: () => {},
});

export const BoardProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<'X' | 'O' | null>(null);
  const [draw, setDraw] = useState<boolean>(false);

  return (
    <BoardContext.Provider
      value={{ board, currentPlayer, winner, draw, setBoard, setCurrentPlayer, setWinner, setDraw }}
    >
      {children}
    </BoardContext.Provider>
  );
};
