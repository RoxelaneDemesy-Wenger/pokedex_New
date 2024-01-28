import './App.scss';
import Pokemon from '../Pokemon/Pokemon';
import Header from '../Header/Header';
// import Log from '../Log/Log';
// import Menu from '../Pokemon/Menu/Menu';

function App() {
  return (
    <div className="container">
      <Header />
      {/* <Log /> */}
      <Pokemon />
    </div>
  );
}

export default App;
