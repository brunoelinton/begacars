import CarCardImage from '../../assets/images/car-card.png';
import CarCardImage0 from '../../assets/images/hilux-cinza.png';
import CarCardImage1 from '../../assets/images/hilux-azul.png';
import CarCardImage2 from '../../assets/images/hilux-branca.png';
import CarCardImage3 from '../../assets/images/hilux-vermelha.png';
import CarCardImage4 from '../../assets/images/hilux-escura.png';
import CarCardImage5 from '../../assets/images/hilux-preta.png';
import './styles.css';
import '../../App.css';
import Buttom from '../Buttom';

const CarCard = (props) => {
  let car = '';
  switch (props.valor) {
    case 0:
      car = CarCardImage0;
      break;
    case 1:
      car = CarCardImage1;
      break;
    case 2:
      car = CarCardImage2;
      break;
    case 3:
      car = CarCardImage3;
      break;
    case 4:
      car = CarCardImage4;
      break;
    case 5:
      car = CarCardImage5;
      break;
    default:
      car = CarCardImage;
  }

  return (
    <div className="base-style carcard-main">
      <div className="carcard-main-image">
        <img src={car} alt="Rides on the Storm..." />
      </div>
      <div className="carcard-main-text">
        <h1>Hilux Toda Equipada</h1>
        <p>
          Eu vou comprar uma Hilux toda equipada
          <br /> Para dar um cavalinho de pau pela rua da cidade
        </p>
      </div>
      <Buttom valor="COMPRAR" />
    </div>
  );
};

export default CarCard;
