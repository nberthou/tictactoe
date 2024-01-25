import { PlayersProvider } from './contexts/TicTacToeContext';
import { BoardProvider } from './contexts/BoardContext';
import { TicTacToe } from './components/TicTacToe';
import './App.css';

function App() {
  return (
    <>
      <PlayersProvider>
        <BoardProvider>
          <TicTacToe />
        </BoardProvider>
      </PlayersProvider>
    </>
  );
}

export default App;
