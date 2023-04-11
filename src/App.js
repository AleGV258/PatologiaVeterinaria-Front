import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './views/Login.js';
import Register from './views/Register.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
