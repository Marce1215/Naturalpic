import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import AppRoutes from './routes/AppRoutes';
import { FavoritesProvider } from './components/FavoritesContext';
function App() {
  return (
    <div className="App">
      <FavoritesProvider>
        <Router>
          <Nav />
          <AppRoutes />
        </Router>
      </FavoritesProvider>
     
    </div>
  );
}

export default App;
