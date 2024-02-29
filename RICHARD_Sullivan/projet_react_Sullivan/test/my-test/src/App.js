import './App.css';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBox from './components/SearchBox';
import Movie from './components/Movie'

function App() {
  return (
    <div className="App">
      <SearchBox />
      <Movie />
      <Footer />
    </div>
  );
}

export default App;
