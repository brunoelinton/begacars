import NavBar from '../../components/NavBar';
import CarHome from '../../assets/images/car-home.png';

import './styles.css';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-card">
            <div className="home-image-container">
                <img src={CarHome} alt="Carro de patrão" />
            </div>
            <div className="home-content-container">
                <h1>O carro perfeito para você.</h1>
                <p>Conheça os nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
