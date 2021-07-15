import './App.css';
import Playlist from './componentplaylist/data';
import data from './data/data';

function App() {
  return (
    <div className="App">
       <Playlist data={data}/>
    </div>
  );
}

export default App;