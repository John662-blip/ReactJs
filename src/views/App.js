import logo from './logo.svg'
import './App.scss'
import ListTodos from './todos/listTodos';
import Mycomponent from './Exa/Mycomponent'
import ListUsers from './Users/ListUsers';
import DetailUsers from './Users/DetailUsers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Exa/Home';
import {
  BrowserRouter as route,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* {<ListTodos />} */}
          {/* {<Mycomponent />} */}
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/todo' element={<ListTodos />} />
            <Route path='/about' element={<Mycomponent />} />
            <Route path='/users' element={<ListUsers />} exact />
            <Route path='/users/:id' element={<DetailUsers />} />
          </Routes>
        </header>

      </div>
    </BrowserRouter>

  );
}

export default App;
