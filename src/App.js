import './App.css';
import FilterSide from './components/FilterSide/FilterSide';
import ImageSide from './components/ImageSide/ImageSide';

function App() {
  return (
    <div className='App row'>

        <div className='col'>
        <ImageSide />
      </div>

      <div className="col" >
        <FilterSide />
      </div>

    </div>
  );
}

export default App;
