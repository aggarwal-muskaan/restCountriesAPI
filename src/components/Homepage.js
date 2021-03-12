import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import { cards } from "../contexts/state.context";
import useInput from "../customhook/useInput";
import SearchIcon from "@material-ui/icons/Search";

function Homepage() {
  const state = useContext(cards);
  const [searchCountry, handleChange] = useInput({
    source: "",
    input: "",
    dropdown: "",
  });
  // const [selectRegion, handleRegion] = useDropdown("");
  return (
    <div>
      <div>
        <div>
          <SearchIcon />
          <input
            placeholder="Search for a country..."
            type="text"
            name="input"
            value={searchCountry.text}
            onChange={handleChange}
          />
        </div>
        <select
          name="dropdown"
          value={searchCountry.text}
          onChange={handleChange}
          // resetInput()
        >
          {/* ? fix default value */}
          <option value="-1">Filter by Region</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe </option>
          <option>Oceania</option>
        </select>
      </div>

      <div>
        {state && state.map((s) => <CountryCard {...s} key={s.name} />)})
      </div>
    </div>
  );
}

export default Homepage;
