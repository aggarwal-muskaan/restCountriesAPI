import React, { useContext } from "react";
import CountryCard from "./CountryCard";
import { cards } from "../contexts/state.context";
import useInput from "../customhook/useInput";
import SearchIcon from "@material-ui/icons/Search";

function Homepage() {
  const state = useContext(cards);
  const [searchCountry, handleChange] = useInput("");

  return (
    <div>
      <div>
        <div>
          <SearchIcon />
          <input
            placeholder="Search for a country..."
            type="text"
            value={searchCountry}
            onChange={handleChange}
          />
        </div>
        {/* <select>
          <option selected disabled>
            Filter by Region
          </option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe </option>
          <option>Oceania</option>
        </select> */}
      </div>

      <div>
        {state.map((s) => (
          <CountryCard {...s} key={s.name} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
