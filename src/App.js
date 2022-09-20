import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="App">
    <div className='app__videos'>
    <Video 
    url={'/images/1.webm'}
    channels='ssnghaagg'
    description='This is description'
    song='This is the song'
    likes={122}
    shares={23}
    messages={13}/>

<Video 
    url={'/images/1.webm'}
    channels='ssnghaagg'
    description='This is description'
    song='This is the song'
    likes={232}
    shares={21}
    messages={8}/>
    
    </div>
    </div>
  );
}

export default App;
