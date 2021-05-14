import { useState, useEffect } from "react";

function useApi(init) {
  const [state, changeState] = useState(init);
  const [allCountries, fetchAllCountries] = useState([]);
  useEffect(() => {
    let baseUrl = process.env.REACT_APP_ALL_COUNTRIES;
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        changeState(data);
        fetchAllCountries(data);
      });
  }, []);

  return [state, allCountries, changeState];
}

export default useApi;
