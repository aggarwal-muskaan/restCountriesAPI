// import logo from './logo.svg';
// import './App.css';
import { Country } from "./contexts/state.context";
import Header from "./components/Header";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Country>
        <Header />
        <Homepage />
      </Country>
    </div>
  );
}

export default App;
