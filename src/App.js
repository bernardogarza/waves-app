import Player from './components/Player';
import Song from './components/Song';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <h1>Music App</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
