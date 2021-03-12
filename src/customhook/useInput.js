import { useDebounce } from "use-lodash-debounce";
import { useState, useContext, useEffect } from "react";
import { filterCards } from "../contexts/state.context";

function useInput(init) {
  const [val, setVal] = useState(init);
  const changeCards = useContext(filterCards);

  const debouncedSearchTerm = useDebounce(val, 500);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      const findCountry = `https://restcountries.eu/rest/v2/name/${debouncedSearchTerm}`;
      fetch(findCountry)
        .then((res) => res.json())
        .then((data) => changeCards(data));
    }
  }, [debouncedSearchTerm, changeCards]);
  //   const resetInput = (e) => {
  //     setVal("");
  //   };
  return [val, handleChange];
}

export default useInput;
