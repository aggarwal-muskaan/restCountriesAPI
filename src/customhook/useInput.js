import { useDebounce } from "use-lodash-debounce";
import { useState, useContext, useEffect } from "react";
import { filterCards } from "../contexts/state.context";

function useInput(init) {
  const [val, setVal] = useState(init);
  const changeCards = useContext(filterCards);

  const debouncedSearchTerm = useDebounce(val.input, 500);
  const debouncedSelectRegion = useDebounce(val.dropdown, 500);

  const handleChange = (event) => {
    setVal({
      [event.target.name]: event.target.value,
      source: event.target.name,
    });
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      // console.log(val);
      const findCountry = `https://restcountries.eu/rest/v2/name/${debouncedSearchTerm}`;
      fetch(findCountry)
        .then((res) => res.json())
        .then((data) => changeCards(data));
    } else if (debouncedSelectRegion) {
      // console.log("val", val, "deb", debouncedSearchTerm);
      const findCountry = `https://restcountries.eu/rest/v2/region/${debouncedSelectRegion}`;
      fetch(findCountry)
        .then((res) => res.json())
        .then((data) => changeCards(data));
    }
  }, [debouncedSearchTerm, debouncedSelectRegion, changeCards]);

  // const resetInput = (e) => {
  //   if (e.target.name === "input") setVal({ dropdown: "-1" });
  //   else setVal({ input: "" });
  // };
  return [val, handleChange];
}

export default useInput;
