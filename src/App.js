import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './component/Home/Home';
import './App.css'
import Main from './component/Main/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/main' element={<Main></Main>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
