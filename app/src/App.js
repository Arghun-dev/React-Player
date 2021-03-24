import './App.css';
import { Player } from 'video-react';
// import "node_modules/video-react/dist/video-react.css";

function App() {
  return (
    <div className="App">
      <Player
        playsInline
        poster="/assets/2018_banner.jpg"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
}

export default App;
