import Home from './pages/Home';
import NavBar from './components/NavBar';

import './assets/styles/custom.scss';
import './App.css';
import CarCard from './components/CarCard';
import Catalog from './pages/Catalog';


const App = () => {
  return(
    <>
      <NavBar />
      <Catalog />
    </>
  );
}

export default App;
