import './App.css';
import { Button } from './Compontees/Button';
import Footer from './Compontees/Footer';
import SearchBar from './Compontees/SearchBar';
import Cart from './Compontees/Cart'; // Assuming Cart component exists
import ParentComponent from './Compontees/ParentComponent';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9"> {/* Left column, takes 9/12 (3/4) of the row */}
            <SearchBar />
            <Button />
            <ParentComponent />
            <Footer />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default App;
