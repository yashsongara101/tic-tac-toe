import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [score, setScore] = useState({
    x: 0,
    o: 0
  });

  // id true = X's turn, false = O's turn
  const [turnTracker, setTurnTracker] = useState(true);

  const [gameBoard, setGameBoard] = useState([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);

  useEffect(() => {
    console.log(gameBoard);
    // console.log(turnTracker);
  }, [gameBoard, turnTracker]);

  function playTurn (targetView) {
    const id = targetView.id;
    const board = gameBoard;

    if(typeof board[id[0]][id[1]] === 'boolean') {
      return;
    }

    board[id[0]][id[1]] = turnTracker;

    targetView.innerHTML = turnTracker ? '❌' : '⭕';

    setGameBoard(board);
    setTurnTracker(!turnTracker);
  }  

  return (
    <div className="App" style={{
      border: '2px solid grey',
      margin: 24,
      borderRadius: 16
    }}>
      <ScoreBoard score={score}/>

      <p>{`${turnTracker ? '❌' : '⭕'} turn`}</p>

      <GameBoard playTurn={playTurn}/>
    </div>
  );
}

export default App;
