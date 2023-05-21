import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import './App.css'
import Main from './component/Main/Main';
import Voluenteers from './component/Voluenteers/Voluenteers';
import Header from './component/Header/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/main' element={<Main></Main>}></Route>
          <Route path='/voluntear' element={<Voluenteers></Voluenteers>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
