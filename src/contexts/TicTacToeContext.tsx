import { useState, createContext, FC, ReactNode } from 'react';

type PlayersProviderProps = {
  player1Username: string;
  player2Username: string;
  setPlayer1Username: (_username: string) => void;
  setPlayer2Username: (_username: string) => void;
};

export const PlayersContext = createContext<PlayersProviderProps>({
  player1Username: '',
  player2Username: '',
  setPlayer1Username: () => {},
  setPlayer2Username: () => {},
});

export const PlayersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [player1Username, setPlayer1Username] = useState('');
  const [player2Username, setPlayer2Username] = useState('');

  return (
    <PlayersContext.Provider value={{ player1Username, player2Username, setPlayer1Username, setPlayer2Username }}>
      {children}
    </PlayersContext.Provider>
  );
};
