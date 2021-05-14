import React, { useContext } from "react";
import PropTypes from "prop-types";
import CountryCard from "./CountryCard";
import { cards } from "../contexts/state.context";
import useInput from "../customhook/useInput";
import SearchIcon from "@material-ui/icons/Search";

function Homepage({ history }) {
  const state = useContext(cards);
  const [searchCountry, handleChange] = useInput({
    // source: "",
    input: "",
    dropdown: "",
  });

  return (
    <div>
      <div>
        <div>
          <SearchIcon />
          <input
            placeholder="Search for a country..."
            type="text"
            name="input"
            value={searchCountry.input || ""}
            onChange={handleChange}
          />
        </div>
        <select
          name="dropdown"
          value={searchCountry.dropdown || ""}
          onChange={handleChange}
        >
          {/* ? fix default value */}
          <option value="-1">Filter by Region</option>
          <option>Americas</option>
          <option>Africa</option>
          <option>Asia</option>
          <option>Europe </option>
          <option>Oceania</option>
        </select>
      </div>

      <div>
        {state?.message ? (
          <h3>No Search Found.</h3>
        ) : (
          state.map((s) => <CountryCard {...s} key={s.name} {...history} />)
        )}
      </div>
    </div>
  );
}

Homepage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Homepage;
