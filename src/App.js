import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { GlobalStyles } from "./styles/globalStyles";

import { useDarkMode } from "./customhook/useDarkMode";
import { Country } from "./contexts/state.context";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [theme, toggleTheme] = useDarkMode("light");

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // if (!mountedComponent) return <div />;

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Country>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Homepage {...props} />}
              />
              <Route
                path="/detail/:id"
                exact
                render={(routeProps) => <CountryDetails {...routeProps} />}
              />
            </Switch>
          </Country>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
