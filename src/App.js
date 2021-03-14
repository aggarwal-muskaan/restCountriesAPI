// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import { Country } from "./contexts/state.context";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Country>
        <Switch>
          <Route path="/" exact render={(props) => <Homepage {...props} />} />
          <Route
            path="/detail/:id"
            exact
            render={(routeProps) => <CountryDetails {...routeProps} />}
          />
        </Switch>
      </Country>
    </div>
  );
}

export default App;
