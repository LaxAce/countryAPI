import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [countries, setCountries] = useState(null);
  const [isPendding, setIsPendding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Unable to fetch data...");
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setIsPendding(false);
        setError(null);
      })
      .catch((err) => {
        console.log(err.message);
        setIsPendding(false);
        setError(err.message);
      });
  }, [url]);

  return { countries, isPendding, error };
};

export default UseFetch;
