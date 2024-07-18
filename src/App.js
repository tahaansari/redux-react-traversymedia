import logo from './logo.svg';
import './App.css';
import Post from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Post></Post>
      </header>
    </div>
  );
}

export default App;
