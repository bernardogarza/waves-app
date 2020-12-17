import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/App.scss';
import { data } from './util';

function App() {
  const [songs, setSongs] = useState(data());
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
