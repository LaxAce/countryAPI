import { useParams } from "react-router";
import { Link } from "react-router-dom";
import UseFetch from "./UseFetch";

const CountryDetails = () => {
  let { id } = useParams();

  const { countries, isPendding, error } = UseFetch(
    `https://api-country-details.herokuapp.com/id/${id}`
  );
  // id = countries && countries.alpha;
  // console.log(id);

  function helper() {
    return UseFetch("https://api-country-details.herokuapp.com/countries");
  }
  const a = helper();
  const allCountries = a.countries;

  return (
    <div className="details container">
      <Link to="/">
        <div className="arrow-back">
          <span>&#8592;</span> Back
        </div>
      </Link>
      {isPendding && <div className="message">Loading...</div>}
      {error && <div className="message">{error} 😫</div>}
      {countries && (
        <div className="full-details" key={countries._id}>
          <div>
            <img
              className="big-flag"
              src={countries.flag}
              alt="flag"
              width="480px"
              height="330px"
            />
          </div>
          <div className="more-info">
            <h1>{countries.name}</h1>
            <div className="flex-details">
              <div className="first-coln">
                <div>
                  <label htmlFor="nativ-name">Native Name:</label>
                  <span> {countries.nativeName}</span>
                </div>
                <div>
                  <label htmlFor="nativ-name">Population:</label>
                  <span> {countries.population}</span>
                </div>
                <div>
                  <label htmlFor="nativ-name">Region:</label>
                  <span> {countries.region}</span>
                </div>
                <div>
                  <label htmlFor="nativ-name">Sub Region:</label>
                  <span> {countries.subregion}</span>
                </div>
                <div>
                  <label htmlFor="nativ-name">Capital:</label>
                  <span> {countries.capital}</span>
                </div>
              </div>
              <div className="second-coln">
                <div>
                  <label htmlFor="nativ-name">Top Level Domain:</label>
                  <span> {countries.topLevelDomain}</span>
                </div>
                <div>
                  <label htmlFor="nativ-name">Currencies:</label>
                  <span> {countries.currencies[0]}</span>
                </div>
                <div>
                  <label htmlFor="nativ-name">Languages:</label>

                  <span>
                    {" "}
                    {countries.languages.map((lang) => lang).join(", ")}
                  </span>
                </div>
              </div>
            </div>
            <div className="border-countries">
              <label htmlFor="border-count">Border Countries:</label>

              <div className="border-grid">
                {countries.borders.length === 0
                  ? "None"
                  : countries.borders.map((border) => (
                      <div className="border-grids" key={border}>
                        <Link
                          to={`/details/${
                            allCountries &&
                            allCountries?.filter(
                              (country) => country && country.alpha === border
                            )[0]._id
                          }`}
                        >
                          {" "}
                          <div className="border">
                            {allCountries &&
                              allCountries.filter(
                                (country) => country.alpha === border
                              )[0].name}
                          </div>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
