import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import Navbar from './assets/components/Navbar';
// import ClaimForm from './assets/pages/Claim';
import IncentivePage from './assets/pages/Incentives';
import ContactForm from './assets/pages/Contact';
import FarmerForm from './assets/pages/Claim';
import ProfilePage from './assets/pages/Profile';

function App() {
  return (
    <Router>
      <div className='bgimage h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claim" element={<FarmerForm />} />
          <Route path="/incentives" element={<IncentivePage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
