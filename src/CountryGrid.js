import { Link } from "react-router-dom";

const CountryGrid = ({ countries }) => {
  return (
    <div className="country-grid">
      {countries &&
        countries.map((country) => (
          <div className="each-country" key={country.alpha3Code}>
            <Link to={`/details/${country.alpha3Code}`}>
              <div className="country-column">
                <img src={country.flag} alt="" width="200px" height="130px" />
                <h2>{country.name}</h2>
                <div className="population">
                  <label htmlFor="Population">Population: </label>
                  {country.population}
                </div>
                <div className="region">
                  <label htmlFor="region">Region: </label>
                  {country.region}
                </div>
                <div className="capital">
                  <label htmlFor="captial">Capital: </label>
                  {country.capital}
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default CountryGrid;
