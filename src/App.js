import './App.css';
import FilterSide from './components/FilterSide/FilterSide';
import ImageSide from './components/ImageSide/ImageSide';

function App() {
  return (
    <div className='App row'>

        <div className='col-sm-6'>
        <ImageSide />
      </div>

      <div className='col-sm-6' >
        <FilterSide />
      </div>

    </div>
  );
}

export default App;
