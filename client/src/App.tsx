import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Wheel from './components/Wheel';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/wheel' element={<Wheel />} />
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
