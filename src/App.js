import logo from './logo.svg';
import './App.css';
import CounterFile from './components/CounterFile';
import Message from './components/Message';
import VValue from './components/VValue';
import ApiFoods from './components/ApiFoods';
import Children from './components/Children';


function App() {
  return (
    <div className="App">
    <parent>
      <Children />
    </parent>
    <hr />
    <ApiFoods />
    <hr />
    <VValue />
    <hr/>
      <Message txt="Hello"/>
      <Message txt="Bye"/>
      <CounterFile />
    </div>
  );
}

export default App;
