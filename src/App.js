import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import VerifyOTP from './pages/VerifyOTP';
import SendMessage from './pages/SendMessage';
import Home from './pages/Home';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verifyotp" element={<VerifyOTP />} />
      <Route path="/sendmessage" element={<SendMessage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
