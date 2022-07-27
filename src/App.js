import logo from "./logo.svg";
import "./App.css";
import Search from "./components/seach";
import Sugestions from "./components/sugestions";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="bg-bookshelf h-full md:h-screen p-4">
          <div className="text-5xl font-bold underline text-amber-100 py-48 px-24">
            Start the search for your next favorite book
          </div>
        </div>
        <div className="h-full p-4">
          <Search />
          <Sugestions />
        </div>
      </div>
    </div>
  );
}

export default App;
