import CarCard from '../../components/CarCard';
import SearchBar from '../../components/SearchBar';
import './styles.css';

const Catalog = () => {
  return (
    <div className="catalog-cotainer">
      <div className="container my-4">
        <SearchBar />
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <CarCard valor={0} />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard valor={1} />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard valor={2} />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard valor={3} />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard valor={4} />
          </div>
          <div className="col-sm-6 col-lg-4">
            <CarCard valor={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
