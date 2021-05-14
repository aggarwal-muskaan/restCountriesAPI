import { useDebounce } from "use-lodash-debounce";
import { useState, useContext, useEffect } from "react";
import { filterCards } from "../contexts/state.context";
import { cards } from "../contexts/state.context";
import { allCountriesData } from "../contexts/state.context";

function useInput(init) {
  const [val, setVal] = useState(init);
  const changeCards = useContext(filterCards);
  const state = useContext(cards);
  const allCountries = useContext(allCountriesData);

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
      const findCountry = `${process.env.REACT_APP_SEARCH_BY_NAME}${debouncedSearchTerm}`;
      fetch(findCountry)
        .then((res) => res.json())
        .then((data) => changeCards(data))
        .catch((error) => {
          throw error;
        });
    } else if (debouncedSelectRegion) {
      const findCountry = `${process.env.REACT_APP_SEARCH_BY_REGION}${debouncedSelectRegion}`;
      fetch(findCountry)
        .then((res) => res.json())
        .then((data) => changeCards(data))
        .catch((error) => {
          throw error;
        });
    } else if (debouncedSearchTerm === "" && state?.message) {
      changeCards(allCountries);
    }
  }, [
    debouncedSearchTerm,
    debouncedSelectRegion,
    changeCards,
    state.message,
    allCountries,
  ]);

  return [val, handleChange];
}

export default useInput;
