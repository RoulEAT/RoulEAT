import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Wheel from './components/Wheel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/wheel' element={<Wheel />} />
      </Routes>
    </Router>
  );
}

export default App;
