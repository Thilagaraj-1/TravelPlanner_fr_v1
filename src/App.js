
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Signin from './Signin';
import Admin from './Admin';
import ImageUploader from './ImageUploader';
import Alogin from './Alogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/img' element={<ImageUploader />}></Route>
          <Route path='/alogin' element={<Alogin />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
