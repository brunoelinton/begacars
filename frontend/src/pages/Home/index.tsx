import NavBar from '../../components/NavBar';
import CarHomeImage from '../../assets/images/car-home.png';
import Buttom from '../../components/Buttom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-card-content-top">
            <div className="home-card-content-top-image">
              <img src={CarHomeImage} alt="Carro de patrão" />
            </div>
            <div className="home-card-content-top-text">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
          <div className="home-card-content-bottom">
            <Buttom valor="VER CATÁLOGO" />
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
