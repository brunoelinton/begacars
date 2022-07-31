import './styles.css';
import '../../App.css';

const SearchBar = () => {
  return (
    <div className="base-style carcard-search">
      <input type="text" name="buscar" placeholder="Digite sua busca" />
      <div className="buscar">
        <span>BUSCAR</span>
      </div>
    </div>
  );
}

export default SearchBar;
