import { FC, useContext } from 'react';
import { PlayersContext } from '../contexts/TicTacToeContext';

type PlayersPageProps = {
  setIsPlaying: (_callback: (_prevIsPlaying: boolean) => boolean) => void;
};

export const PlayersPage: FC<PlayersPageProps> = ({ setIsPlaying }) => {
  const { player1Username, setPlayer1Username, player2Username, setPlayer2Username } = useContext(PlayersContext);
  return (
    <div>
      <h1>Indiquez vos pseudos !</h1>
      <div>
        <label htmlFor="player1">Joueur 1</label>
        <input
          type="text"
          value={player1Username}
          onChange={(e) => {
            setPlayer1Username(e.target.value);
          }}
          name="player1"
        />
      </div>
      <div>
        <label htmlFor="player2">Joueur 2</label>
        <input
          type="text"
          value={player2Username}
          onChange={(e) => {
            setPlayer2Username(e.target.value);
          }}
          name="player2"
        />
      </div>
      <button
        onClick={() => setIsPlaying((prevIsPlaying) => !prevIsPlaying)}
        disabled={player1Username?.length < 3 || player2Username.length < 3}
      >
        Jouer
      </button>
    </div>
  );
};
