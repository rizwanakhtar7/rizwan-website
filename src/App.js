import { BrowserRouter as Router } from 'react-router-dom'
import Home from './common/Home';
import Nav from './common/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Home />
    </Router>
   
  );
}

export default App;
