import CountryGrid from "./CountryGrid";
import UseFetch from "./UseFetch";
import { useState, useEffect } from "react";

const Home = () => {
  // =============== All Countries ===============
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("Filter by Region");

  const { countries, isPendding } = UseFetch(
    "https://restcountries.com/v2/all"
  );

  // ============== Searched Countries =============
  const [findCountries, setFindCountries] = useState(null);

  // const [searchError, setSearchError] = useState(null);

  const searchUrl = `
  https://restcountries.com/v2/name/${country || "a"}`;

  useEffect(() => {
    fetch(searchUrl)
      .then((res) => {
        if (!res.ok) throw Error("Country not found!!!");

        return res.json();
      })
      .then((data) => {
        setFindCountries(data);
        // setSearchError(null);
      })
      .catch((err) => {
        // setSearchError(err.message);

        if (err.name.toString() === "TypeError")
          throw new TypeError("Country not found!!...");
      });
  }, [searchUrl]);

  // =============== Sort by Continent =============
  const continent = [
    ...new Set(countries && countries.map((country) => country.region)),
  ].sort();

  const [sortRegion, setSortRegion] = useState(null);

  const regionUrl = `
  https://restcountries.com/v2/region/${region}`;

  useEffect(() => {
    fetch(regionUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSortRegion(data);
      })
      .catch((err) => {});
  }, [regionUrl]);

  return (
    <div className="home container">
      <div className="search-region">
        <div className="search-box">
          <i className="fas fa-search search-icon"></i>

          <input
            className="inputClass"
            type="search"
            placeholder="Search for a country..."
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="region">
          <select
            name="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option>Filter by Region</option>
            {continent.map((region) => (
              <option className="opt" key={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isPendding && <div className="message">Loading...</div>}
      {/* {searchError && <div className="message">{searchError} </div>} */}
      {/* {error && <div className="message">{error} 😫</div>} */}

      <CountryGrid
        pedding={isPendding}
        // error={error}
        // countries={findCountries || countries}
        countries={
          (sortRegion &&
            (sortRegion.status === 404 || country !== ""
              ? false
              : sortRegion)) ||
          (findCountries && findCountries) ||
          countries
        }
      />
    </div>
  );
};

export default Home;
