import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Wheel from './components/Wheel';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  const [location, setLocation] = useState<string | undefined>('');

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<LandingPage setLocation={setLocation}/>} />
          <Route path='/wheel' element={<Wheel location={location}/>} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
