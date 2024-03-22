import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import Navbar from './assets/components/Navbar';
import ClaimForm from './assets/pages/Claim';
import IncentivePage from './assets/pages/Incentives';

function App() {
  return (
    <Router>
      <div className='bgimage h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claim" element={<ClaimForm />} />
          <Route path="/incentives" element={<IncentivePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
