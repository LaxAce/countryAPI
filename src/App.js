import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact path="/countryAPI">
              <Home />
            </Route>

            <Route path="/countryAPI/details/:id">
              <CountryDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
