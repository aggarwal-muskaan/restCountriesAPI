import { useDebounce } from "use-lodash-debounce";
import { useState, useContext, useEffect } from "react";
import { filterCards } from "../contexts/state.context";

function useInput(init) {
  const [val, setVal] = useState(init);
  const changeCards = useContext(filterCards);

  const debouncedSearchTerm = useDebounce(val.input, 800);
  const debouncedSelectRegion = useDebounce(val.dropdown, 500);

  const handleChange = (event) => {
    setVal({
      [event.target.name]: event.target.value,
      // source: event.target.name,
    });
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      const findCountry = `https://restcountries.eu/rest/v2/name/${debouncedSearchTerm}`;
      fetch(findCountry)
        .then((res) => res.json())
        .then((data) => changeCards(data))
        .catch((error) => {
          throw error;
        });
    } else if (debouncedSelectRegion) {
      const findCountry = `https://restcountries.eu/rest/v2/region/${debouncedSelectRegion}`;
      fetch(findCountry)
        .then((res) => res.json())
        .then((data) => changeCards(data))
        .catch((error) => {
          throw error;
        });
      // }
    } else if (debouncedSearchTerm === "") {
      let baseUrl = "https://restcountries.eu/rest/v2/all";
      fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => changeCards(data));
    }
  }, [debouncedSearchTerm, debouncedSelectRegion, changeCards]);

  return [val, handleChange];
}

export default useInput;
