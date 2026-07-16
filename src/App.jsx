import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Competitions from './pages/Competitions';
import Socials from './pages/Socials';

function App() {
  return (
    <Router>
      <Layout>
        <Home />
        <Competitions />
        <Socials />
      </Layout>
    </Router>
  );
}

export default App;
