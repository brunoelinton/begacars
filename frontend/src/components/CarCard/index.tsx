import CarCardImage from '../../assets/images/car-card.png';
import './styles.css';
import '../../App.css';
import Buttom from '../Buttom';

const CarCard = () => {
  return (
      <div className="base-style carcard-main">
        <div className="carcard-main-image">
          <img src={CarCardImage} alt="Rides on the Storm..." />
        </div>
        <div className="carcard-main-text">
          <h1>Audi Supra TT</h1>
          <p>
            Riders On The Storm... Riders On The Storm...
            <br /> Ride... Ride.. Ride...
          </p>
        </div>
        <Buttom valor="COMPRAR" />
      </div>
  );
};

export default CarCard;
