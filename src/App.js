import './App.css';
import AppRoute from './Route/AppRoute';
import Header from './components/Header';
import Fotter from './components/Fotter';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <AppRoute/>
      <Fotter/>
    </Router>

  );
}

export default App;
