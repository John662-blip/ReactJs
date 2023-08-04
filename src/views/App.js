import logo from './logo.svg'
import './App.scss'
import ListTodos from './todos/listTodos';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world reactjs hung
        </p>
        <ListTodos />
      </header>

    </div>
  );
}

export default App;
