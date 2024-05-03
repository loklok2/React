import logo from './logo.svg';
import './App.css';
import Hello from './01/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <Hello sn= "김경민"/>
        <Hello sn= "박동헌"/>
        <Hello />
      </header>
    </div>
  );
}

export default App;  //임포트 하면 무조건 익스포트 해야한다
