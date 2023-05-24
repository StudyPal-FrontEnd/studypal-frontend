import './App.css';
import LandingPage from './container/pages/components/auth/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './container/pages/components/auth/Login';
import Signup from './container/pages/components/auth/SignUp';
import OTP from './container/pages/components/auth/OtpInput';

function App() {
  return (
    <div className='App'>
       <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp' element={<OTP />} />
        </Routes>
    </Router>
   </div>
  );
}

export default App;
