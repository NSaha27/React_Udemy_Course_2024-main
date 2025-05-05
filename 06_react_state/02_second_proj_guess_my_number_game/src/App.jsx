import './App.css';
import Game from './components/Game';

function App() {
  const randNumber = Math.floor(Math.random() * 20);
  return (
    <>
      <Game randNumber={randNumber} />
    </>
  )
}

export default App
