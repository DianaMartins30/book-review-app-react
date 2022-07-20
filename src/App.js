import logo from './logo.svg';
import './App.css';
import Search from './components/seach';
import Sugestions from './components/sugestions';
 

function App() {
  return (
    <div className="App">
      <h2 className='text-3xl font-bold underline'>Start the search for your next favorite book</h2>
      <Search/>
      <Sugestions/>
    </div>
  );
}

export default App;
